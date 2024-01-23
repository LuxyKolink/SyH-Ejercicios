// const http = require("node:http");

const url = process.argv[2] || "http://localhost:3000";
const url2 = process.argv[3] || "http://localhost:4000";
const url3 = process.argv[4] || "http://localhost:5000";

const urls = [url, url2, url3];
// const rawData = [];
// let count = 0;

// for (let i = 0; i < urls.length; i++) {
//     http.get(urls[i], (res) => {
//         res.setEncoding("utf-8");

//         res.on("data", (chunk) => {
//             rawData[i] = chunk;
//             count++;
//             if (count === urls.length) {
//                 for (let i = 0; i < urls.length; i++) {
//                     console.log(rawData[i]);
//                 }
//             }
//         });
//         // res.on("end", () => {
//         //     if (count === urls.length) {
//         //         const data = rawData;
//         //         for (let i = 0; i < urls.length; i++) {
//         //             console.log(data[i]);
//         //         }
//         //     }
//         // });
//     }).on("error", (e) => {
//         console.error(`Got error: ${e.message}`);
//     });
// }

'use strict'
const http = require('http')
// const bl = require('bl')
const results = []
let count = 0

function printResults() {
    for (let i = 0; i < 3; i++) {
        console.log(results[i])
    }
}

function httpGet(index) {
    http.get(urls[index], function (res) {
        res.setEncoding("utf-8");

        res.on("data", (chunk) => {
            results[index] = chunk;
            count++;
            if (count === urls.length) {
                printResults()
            }
        });
    })
}

for (let i = 0; i < 3; i++) {
    httpGet(i)
}