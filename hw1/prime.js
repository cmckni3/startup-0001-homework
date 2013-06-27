#!/usr/bin/env node

// require filesystem module
var fs = require('fs');

// prime
var prime = function(n) {
  if (n < 2) { return 0; }
  else if (n == 2) { return 1; }
  else
  {
    var isPrime = 1;
    for (i = 2; i < Math.sqrt(n)+1; i++)
    {
      if (n % i == 0)
        isPrime = 0;
    }
    return isPrime;
  }
};

// Find first K Prime numbers via basic for loop
var firstkprime = function(k) {
    var i = 1;
    var arr = [];
    for(i = 1; arr.length < k; i++) {
        if (prime(i))
          arr.push(i);
    }
    return arr;
};

var k = 100;
console.log("firstkprime(" + k + ")");
var primes = firstkprime(k).join(",") + "\n";
var outfile = "primes.txt";
fs.writeFileSync(outfile, primes);
console.log("Wrote primes to", outfile);
