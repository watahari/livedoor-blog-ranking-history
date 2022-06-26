#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const dataFolder = '/data';
const resultFolder = '/frontend';
const now = new Date();
const outOfRank = 101;


async function formatData(dataFolder2, term) {
  let resultRawJavaScript = "";
  // urlリストを作りつつ、resultRawJavaScriptにlabelを組み立てていく
  let temporaryBlogUrlList = [];
  resultRawJavaScript = "var labels = [";
  for (let i = term - 1; i >= 0; i--) {
    const targetDate = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - i, now.getUTCHours());
    const targetDateString = fileString(targetDate);

    resultRawJavaScript += "'" + targetDateString + "',";

    const p = path.join(__dirname, dataFolder, dataFolder2, targetDateString) + '.json';
    if (!fs.existsSync(p)) {
      continue;
    }
    const data = JSON.parse(fs.readFileSync(p));
    Object.keys(data).forEach(url => {
      temporaryBlogUrlList.push(url);
    });
  }
  resultRawJavaScript += "];";
  // unique
  const blogUrlList = Array.from(new Set(temporaryBlogUrlList))

  // last7DaysDataに、Blog単位の順位列にしていく
  let last7DaysData = {};
  blogUrlList.forEach(url => {
    last7DaysData[url] = {
      "label": null,
      "data": []
    };
  });
  for (let i = term - 1; i >= 0; i--) {
    const targetDate = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - i, now.getUTCHours());
    const targetDateString = fileString(targetDate);
    const p = path.join(__dirname, dataFolder, dataFolder2, targetDateString) + '.json';
    if (!fs.existsSync(p)) {
      blogUrlList.forEach(url => {
        last7DaysData[url]["data"].push(outOfRank);
      });
      continue;
    }
    const data = JSON.parse(fs.readFileSync(p));

    blogUrlList.forEach(url => {
      if (!last7DaysData[url]["label"] && data[url]) {
        last7DaysData[url]["label"] = data[url]["title"]
      }
      if (data[url]) {
        last7DaysData[url]["data"].push(parseInt(data[url]["rank"]));
      } else {
        last7DaysData[url]["data"].push(outOfRank);
      }
    });
  }

  // output as json
  resultRawJavaScript += "var datasets = ";
  //resultRawJavaScript += JSON.stringify(Object.values(last7DaysData), null, 2);
  resultRawJavaScript += JSON.stringify(Object.values(last7DaysData));
  resultRawJavaScript += ";";
  return resultRawJavaScript;
}

formatData("/livedoor-blog", 7)
  .then(result => {
    const fileName = 'livedoor_blog_data_last7d.js';
    const last7DaysFilePath = path.join(__dirname, resultFolder, fileName);
    fs.writeFileSync(path.resolve(last7DaysFilePath), result);
  });

formatData("/livedoor-blog", 28)
  .then(result => {
    const fileName = 'livedoor_blog_data_last28d.js';
    const last7DaysFilePath = path.join(__dirname, resultFolder, fileName);
    fs.writeFileSync(path.resolve(last7DaysFilePath), result);
  });

function fileString(ts) {
  const year = ts.getUTCFullYear();
  const month = (ts.getUTCMonth() + 1).toString().padStart(2, '0');
  const day = ts
    .getUTCDate()
    .toString()
    .toString()
    .padStart(2, '0');
  const name = `${year}-${month}-${day}`;
  return name;
}
