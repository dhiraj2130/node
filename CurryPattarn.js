var add = function(a,b){
	if(typeof a === 'number' && typeof b === 'number'){
	 return a + b;	
	}
}

Function.prototype.method = function(name, func){
	if(!this.prototype[name]){
		this.prototype[name] = func;
	}
}


//Function.method('c',function(){
//console.log(arguments[0]);
//})
//var f = function(){}

Function.method('curry',function(){
	var slice = Array.prototype.slice,
	    args = slice.apply(arguments),
		that = this;
		
		return function(){
			return that.apply(null,args.concat(slice.apply(arguments))); 
			
		}
})

var add1 = add.curry(1);
console.log(add1(1));