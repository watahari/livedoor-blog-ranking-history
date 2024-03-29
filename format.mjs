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

  // lastNDaysDataに、Blog単位の順位列にしていく
  let lastNDaysData = {};
  blogUrlList.forEach(url => {
    lastNDaysData[url] = {
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
        lastNDaysData[url]["data"].push(outOfRank);
      });
      continue;
    }
    const data = JSON.parse(fs.readFileSync(p));

    blogUrlList.forEach(url => {
      if (!lastNDaysData[url]["label"] && data[url]) {
        lastNDaysData[url]["label"] = data[url]["title"]
      }
      if (data[url]) {
        if (data[url]["rank"] == "0") {
          lastNDaysData[url]["data"].push(null);
        } else {
          lastNDaysData[url]["data"].push(parseInt(data[url]["rank"]));
        }
      } else {
        lastNDaysData[url]["data"].push(outOfRank);
      }
    });
  }

  // output as json
  resultRawJavaScript += "var datasets = ";
  //resultRawJavaScript += JSON.stringify(Object.values(lastNDaysData), null, 2);
  resultRawJavaScript += JSON.stringify(Object.values(lastNDaysData));
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

formatData("/livedoor-blog", 90)
  .then(result => {
    const fileName = 'livedoor_blog_data_last90d.js';
    const last90DaysFilePath = path.join(__dirname, resultFolder, fileName);
    fs.writeFileSync(path.resolve(last90DaysFilePath), result);
  });
formatData("/livedoor-blog", 180)
  .then(result => {
    const fileName = 'livedoor_blog_data_last180d.js';
    const last90DaysFilePath = path.join(__dirname, resultFolder, fileName);
    fs.writeFileSync(path.resolve(last90DaysFilePath), result);
  });
formatData("/livedoor-blog", 365)
  .then(result => {
    const fileName = 'livedoor_blog_data_last365d.js';
    const last90DaysFilePath = path.join(__dirname, resultFolder, fileName);
    fs.writeFileSync(path.resolve(last90DaysFilePath), result);
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
