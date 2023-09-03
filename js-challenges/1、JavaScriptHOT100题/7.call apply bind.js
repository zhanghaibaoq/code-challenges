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


Function.prototype.myCall = function(context, ...args) {
  context = context || window;
  const fn = Symbol();
  context[fn] = this;
  const result = context[fn](...args);
  delete context[fn];
  return result;
}

Function.prototype.myApply = function(context, args) {
  context = context || window;
  const fn = Symbol();
  context[fn] = this;
  const result = context[fn](...args);
  delete context[fn];
  return result;
}

Function.prototype.myBind = function(context, ...args) {
  const self = this;
  return function(...args2) {
    return self.apply(context, args.concat(args2));
  }
}
obj.say.myCall(obj1,18,'call');
obj.say.myApply(obj1,[18,'apply'])
obj.say.myBind(obj1,18,'bind')()