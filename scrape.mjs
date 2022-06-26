#!/usr/bin/env node
import fetch from 'node-fetch';
import jsdom from 'jsdom';
import fs from 'fs';
import path from 'path';

const { JSDOM } = jsdom;

const now = new Date();
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const dataFolder = '/data';

let data = {};

async function getLivedoorBlogData() {
  const res = await fetch('https://blog.livedoor.com/ranking/');
  const html = await res.text();
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const nodes = document.querySelectorAll('div.title');
  nodes.forEach(node => {
    // console.log(node.querySelector('span.number').textContent);
    // console.log(node.querySelector('a').href);
    // console.log(node.querySelector('a').textContent);
    data[node.querySelector('a').href] = {
      title: node.querySelector('a').textContent,
      rank: node.querySelector('span.number').textContent
    };
  });
}

getLivedoorBlogData()
  .then(() => {
    const dataFolder2 = '/livedoor-blog';
    const pathToData = path.join(__dirname, dataFolder, dataFolder2, fileString(now)) + '.json';
    // fs.writeFileSync(path.resolve(pathToData), JSON.stringify(data, null, 2));
    fs.writeFileSync(path.resolve(pathToData), JSON.stringify(data));
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
