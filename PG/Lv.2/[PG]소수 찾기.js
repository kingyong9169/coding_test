function solution(numbers) {
    let answer = new Set();
    function numOfCase(arr, str) {
        if(arr.length) {
            for(let i = 0; i <arr.length; i++) {
                let copy = [...arr];
                copy.splice(i,1);
                if(isPrime(parseInt(str+arr[i])))
                    answer.add(parseInt(str+arr[i]));
                numOfCase(copy, str + arr[i]);
            }
        }
    }
    numOfCase(numbers.split(''), '')
    return answer.size;
}

function isPrime(n) {
	if (n <= 1) return false;
	if (n === 2 || n === 3) return true;
	if (n % 2 === 0) return false;
	let divisor = 3;
	while (n > divisor) {
		if (n % divisor === 0) return false;
		divisor += 2;
	}
	return true;
}