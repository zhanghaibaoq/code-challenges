const obj={
  name:'小明',
  say:function(age,address){
    console.log('name:',this.name,'age:',age,'方法:',address);
  }
}
const obj1={
  name:'小红',
}

obj.say.call(obj1,18,'call');
obj.say.apply(obj1,[18,'apply'])
obj.say.bind(obj1,18,'bind')()