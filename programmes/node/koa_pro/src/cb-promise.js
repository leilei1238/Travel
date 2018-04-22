const fs = require('fs')

// 早期
// fs.readFile('./package.json', (err, data) => {
//   if (err) return console.log(err)
//   data = JSON.parse(data)
//   console.log(data)
// })

// 过渡时期
// function readFileAsync (path) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, (err, data) => {
//       if (err) reject(err)
//       else resolve(data)
//     })
//   })
// }
// readFileAsync('./package.json')
//   .then(data => {
//     data = JSON.parse(data)
//     console.log(data.name)
//   })
//   .catch(err => {
//     console.log(err)
//   })

// 现在
const util = require('util')
util.promisify(fs.readFile)('./package.json')
  .then(JSON.parse)
  .then(data => {
    console.log(data.name)
  })
  .catch(err => {
    console.log(err)
  })
