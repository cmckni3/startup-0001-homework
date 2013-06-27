// primes less than or equal to n
// https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
var sieve = function(n) {
  var arr = [0, 0];
  for (i = 2; i <= n; i++)
  {
    arr.push(1);
  }
    for (i = 2; i <= Math.sqrt(n); i++)
    {
      if (arr[i] !== 0)
      {
        for (j = i*i; j <= n; j += i)
          arr[j] = 0;
      }
    }
  var primeArr = [];
  for (i = 2; i < arr.length; i++)
  {
    if (arr[i] === 1)
      primeArr.push(i);
  }
  return primeArr;
};

// Print to console
var fmt = function(arr) {
    return arr.join(" ");
};

var k = 100;
console.log("primes <=", k);
console.log(fmt(sieve(k)));
