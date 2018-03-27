// input
var arr = [ 1, 2, 3, 4, 5 ];


var len = arr.length;
var start = 0;
var end = 0;
var sum = 0;

var skip;
var sumArr = [];
var min;
var max;

for(var i=0; i<len; i++) {

	skip = i;
	start = 0;
	end = 0; 

	//console.log('-- skip --');
	//console.log(arr[skip]);

	//console.log('-- start --');
	// Build start
	for(var j=0; j<skip; j++) {
		start = start + arr[j];
		//console.log(arr[j]);
	}	
	

	//console.log('-- end --');
	// Build rest
	for(var k=skip+1; k<len; k++) {
		end = end + arr[k];
		//console.log(arr[k]);
	}

	sum = start + end;
	sumArr.push(sum);
	//console.log(sum);

	//console.log('-- next loop --');
}

sumArr.sort();
//console.log(sumArr);
min = sumArr[0];
max = sumArr[len-1];
console.log(min + ' ' + max);
