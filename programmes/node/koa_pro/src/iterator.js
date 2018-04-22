// function makeIterator (arr) {
//   let nextIndex = 0
//   // 返回一个迭代器对象
//   return {
//     next: () => {
//       // next() 方法返回的结果对象
//       if (nextIndex < arr.length) {
//         return { value: arr[nextIndex++],done: false} // 当前迭代是否完全迭代结束
//       }else {
//         return {
//           done: true
//         }
//       }
//     }
//   }
// }
// //迭代器总有一个next方法，通过它总能拿到一个对象，这个对象包含两个属性：value:值,done：当前的迭代器是否迭代完成
// //生成器的本质，就是迭代器
// const it = makeIterator(['吃饭', '睡觉', '打豆豆'])
// console.log('首先', it.next().value)
// console.log('其次', it.next().value)
// console.log('然后', it.next().value)
// console.log('最后', it.next().done)

// 生成器：出现目的-简化创建迭代器过程，同时简化逻辑； 通过yield实现类似“断点执行”
function * makeInterator (arr) {
  for (let i = 0; i < arr.length; i++) {
      yield arr[i] // yield 就是会把当前循环到的值给迭代下去
  }
}
const gen = makeInterator(['吃饭', '睡觉', '打豆豆'])
console.log('首先', gen.next())
// console.log('其次', gen.next().value)
// console.log('然后', gen.next().value)
// console.log('最后', gen.next().done)
