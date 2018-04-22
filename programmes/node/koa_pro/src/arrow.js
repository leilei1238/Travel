// const arrow = param = ({param: param})
// // {id:1, movie:xxx}
// const arrow = ({id, movie}) => console.log(id, movie)

const luke = {
  id: 2,
  say: function () {
    setTimeout(function () {
      console.log('id', this.id)
    }, 50)
  },
  sayWithThis: function () {
    let that = this
    setTimeout(function () {
      console.log('id', that.id)
    }, 50)
  },
  sayWithArrow:function(){
      setTimeout(()=>{
          console.log('arrow id: ', this.id)
      },1500)
  },
  sayWithGlobalArrow:()=>{
    setTimeout(()=>{
        console.log('global id: ', this.id)
    },2000)
}
}
luke.say() //undefined
luke.sayWithThis() //2
luke.sayWithArrow() //2
luke.sayWithGlobalArrow() //undefined
