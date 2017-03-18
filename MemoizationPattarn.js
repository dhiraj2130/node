
var fibonicci = function(){
	
	var memo = [0,1];
	
	var fib = function(n){
		var result = memo[n];
		if(typeof result !== 'number'){
			result = fib(n-1) + fib(n-2);
			memo[n] = result;
		}
		return result;
	};
	return fib;
}();
// wrap a function into memoizer
var memoizer = function(memo,fundamental){
	var shell =  function(n){
		var result = memo[n];
		if(typeof result !== 'number'){
			result = fundamental(shell, n);
			memo[n] = result;
		}
		return result;
	}
	return shell;
};

var fibonicci = memoizer([0,1],function(shell,n){
	return shell(n-1) + shell(n-2);
});

console.log(fibonicci(10));
