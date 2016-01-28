
var util = require('util');

function Base () {
	this.name='base';
	this.base = 1991;
	this.sayHello=function  () {
		console.log('base say hello.'+ this.name);
	}

}

Base.prototype.showName = function() {
	console.log(this.name);
};

function Sub () {
	this.name='Sub';
}

util.inherits(Sub,Base);

var objbase = new Base();
objbase.showName();
objbase.sayHello();
// console.log(objbase);

var objsub = new Sub();
objsub.showName();
// objsub.sayHello();
// console.log(objsub);


console.log(util.inspect(objbase,true,2,true));   /// util.inspect 把一个对象转换为字符串
console.log(util.inspect(objsub,true));


///////////////////////////

// var util = require('util');

util.isArray([])
  // true
util.isArray(new Array)
  // true
util.isArray({})
  // false

