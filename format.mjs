#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const dataFolder = '/data';
const resultFolder = '/frontend';
const last7DaysFileName = 'data_last7d.js';
const last7DaysFilePath = path.join(__dirname, resultFolder, last7DaysFileName);
const now = new Date();
const outOfRank = 101;

let last7DaysJavaScript = "";

async function formatData() {
  // urlリストを作りつつ、last7DaysJavaScriptにlabelを組み立てていく
  let temporaryBlogUrlList = [];
  last7DaysJavaScript = "var labels = [";
  for (let i = 6; i >= 0; i--) {
    const targetDate = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - i, now.getUTCHours());
    const targetDateString = fileString(targetDate);

    last7DaysJavaScript += "'" + targetDateString + "',";

    const p = path.join(__dirname, dataFolder, targetDateString) + '.json';
    if (!fs.existsSync(p)) {
      continue;
    }
    const data = JSON.parse(fs.readFileSync(p));
    Object.keys(data).forEach(url => {
      temporaryBlogUrlList.push(url);
    });
  }
  last7DaysJavaScript += "];";
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
  for (let i = 6; i >= 0; i--) {
    const targetDate = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - i, now.getUTCHours());
    const targetDateString = fileString(targetDate);
    const p = path.join(__dirname, dataFolder, targetDateString) + '.json';
    if (!fs.existsSync(p)) {
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
  last7DaysJavaScript += "var datasets = ";
  last7DaysJavaScript += JSON.stringify(Object.values(last7DaysData), null, 2);
  last7DaysJavaScript += ";";
}

formatData()
  .then(() => {
    fs.writeFileSync(path.resolve(last7DaysFilePath), last7DaysJavaScript);
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
