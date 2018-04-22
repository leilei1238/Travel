'use strict';

// const arrow = param = ({param: param})
// // {id:1, movie:xxx}
// const arrow = ({id, movie}) => console.log(id, movie)

var luke = {
  id: 2,
  say: function say() {
    setTimeout(function () {
      console.log('id', this.id);
    }, 50);
  },
  sayWithThis: function sayWithThis() {
    var that = this;
    setTimeout(function () {
      console.log('id', that.id);
    }, 50);
  },
  sayWithArrow: function sayWithArrow() {
    var _this = this;

    setTimeout(function () {
      console.log('arrow id: ', _this.id);
    }, 1500);
  },
  sayWithGlobalArrow: function sayWithGlobalArrow() {
    setTimeout(function () {
      console.log('global id: ', undefined.id);
    }, 2000);
  }
};
luke.say(); //undefined
luke.sayWithThis(); //2
luke.sayWithArrow(); //2
luke.sayWithGlobalArrow(); //undefined
//# sourceMappingURL=arrow.js.map