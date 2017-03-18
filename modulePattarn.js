
Function.prototype.method = function(name,func){
	if(!this.prototype[name]){
		this.prototype[name] = func;
	}
}
// simple example of module pattarn
var module = function(){
	var name = 'dhiraj';
	return function(surname){
	 return name.concat(surname);
	
	}
}()
let surname = 'kumar';
console.log(module(surname));

// adding a strip method in string class to strip out everything
// but numbers [0-9] and characters [a-z]
// method comes from the 'method' method that we have added in 
// Function class. 
String.method('strip',function(){
	var asterix = 'hi';
	return function(){
		return this.replace(/([\w*])/ig,function(match,p1){
		return asterix;
		})
	}
}());

console.log('abc'.strip());
console.log('abc'.replace(/\D/ig,function(match,p1){
		return '*';
		}));