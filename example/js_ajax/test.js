// var obj = {
//   name:'xiaobo',
//   age:'24'
// };
// function test2(){
//   var obj = {
//     name:'xiaohuan',
//     age:'21'
//   };
//   function test1(){
//     console.log(obj);
//   }
//   test1();
// };
// test2();

var obj = {
  name:'xiaobo',
  age:'24'
};
function test1(){
  console.log(obj);
}
function test2(){
  var obj = {
    name:'xiaohuan',
    age:'21'
  };
  test1();
};
test2();
