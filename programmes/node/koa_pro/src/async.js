const fs = require('fs')

// 第一阶段：回调函数
// function readFile (cb) {
//   fs.readFile('./package.json', (err, data) => {
//     if (err) return cb(err)
//     cb(data)
//   })
// }

// readFile((err, data) => {
//   if (!err) {
//     data = JSON.parse(data)
//     console.log(data.name)
//   }
// })

// 第二阶段：promise
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

// 第三阶段： co+Generator+promise
// const co = require('co')
// const util = require('util')
// co(function * () {
//   let data = yield util.promisify(fs.readFile)('./package.json')
//   data = JSON.parse(data)
//   console.log(data.name)
// })
//第四阶段 Async 统一世界
const util = require('util')
const readAsync = util.promisify(fs.readFile) // 返回promise

async function init(){
    let data = await readAsync('./package.json') //返回promise
    data = JSON.parse(data)
    console.log(data.name)
}
const a = init()
console.log(`a ${a}`)