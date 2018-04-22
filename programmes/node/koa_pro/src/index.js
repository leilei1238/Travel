// import { promisify } from 'util'
// import { resolve as r } from 'path'
// import { readFile, writeFileSync as wfs } from 'fs'
// import * as qs from 'querystring'

// promisify(readFile)(r(__dirname, '../package.json'))
//   .then(data => {
//     data = JSON.parse(data)
//     console.log(data.name)
//     wfs(r(__dirname, './name'), String(data.name), 'utf-8')
//   })
import {name, getName} from './ex'

console.log(name)
console.log(getName())

//第四阶段 Async 统一世界
import {readFile} from 'fs'
import {promisify} from 'util'
import {resolve as r} from 'path'

async function init(){
    let data = await promisify(readFile)(r(__dirname,'./package.json')) //返回promise
    data = JSON.parse(data)
    console.log(data.name)
}
const a = init()
console.log(`a ${a}`)