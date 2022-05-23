

function encryptRSA(str){
    //--------------Helper functions --------------
    //Convert character to integer
    function letterToNumber(str) {
      str = str.toUpperCase();
      let out = 0, len = str.length;
      for (let pos = 0; pos < len; pos++) {
        out += (str.charCodeAt(pos) - 64) * Math.pow(26, len - pos - 1);
      }
      return out;
    }
    //Get a random prime number
    //Sieve of Eratosthenes
    const getPrimes = (min, max) => {
      const result = Array(max + 1)
        .fill(0)
        .map((_, i) => i);
      for (let i = 2; i <= Math.sqrt(max + 1); i++) {
        for (let j = i ** 2; j < max + 1; j += i) delete result[j];
      }
      return Object.values(result.slice(Math.max(min, 2)));
    };
    
    const getRandNum = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    
    const getRandPrime = (min, max) => {
      const primes = getPrimes(min, max);
      return primes[getRandNum(0, primes.length - 1)];
    };
    
    //Greatest Common Factor
    function gcd(a, b){
      if(b===0){
        return a;
      }
      return gcd(b, a%b);
    }
    
    //Generate a public exponent
    function publicExponent(zVal){
      let eVal = 3;
      while(eVal < zVal){
        let coPrimeTest = gcd(eVal, zVal)
        if (coPrimeTest === 1){
          break;
        }
        else{
          eVal++;
        }
      }
      return eVal;
    }
    //Encrypt the numeric message array
    function encryptMessage(message, nVal, eVal){
      let power = Math.pow(message, eVal);
      let encrypted = power%nVal;
      return encrypted;
    }
    //Get the private key for decryption
    function privateKey(zVal, eVal){
      for (let d = 2; d < zVal; d++){
        if((d*eVal)%zVal === 1){
          return d;
        }
      }
    }
    
    //--------------Start of Encryption Algorithm--------------
      const stringArray = str.split('');
    
      //Convert characters to integers
      let integerArray = [];
      stringArray.forEach(char => {
        if(char === ' '){
          let intVal = 0;
          integerArray.push(intVal);
        }
        else{
          let intVal = letterToNumber(char);
          integerArray.push(intVal);
        }
      })
    
    
      //Get two random prime numbers
      const firstPrime = getRandPrime(3, 50);
      const secondPrime = getRandPrime(3, 50);
    
      //Compute public key
      const nVal = firstPrime*secondPrime
    
      const zVal = (firstPrime-1)*(secondPrime-1);
    
      //Compute public exponent
      const eVal = publicExponent(zVal);
      console.log("eVal", eVal);
    
      //Encrypt the integer Array
      let encryptedArray = [];
      integerArray.forEach(int => {
        encryptedArray.push(encryptMessage(int, nVal, eVal));
      });
      console.log("encrypted array", encryptedArray);
      
    //Get the private key
    let dVal = privateKey(zVal, eVal);
    
    let solutionArray = {
      encryptedMessage: encryptedArray,
      nVal: nVal,
      dVal: dVal
    }
    return solutionArray;
    
    }
    
    function decryptRSA(message, dVal, nVal){
      //Helper Functions
      //Successive squaring algorithm
      function successiveSquare(bas, exp, N){
      let t = 1;
      while(exp > 0){
          if(exp%2 !==0){
            t = (t*bas)%N
          }
          bas = (bas*bas) % N;
          exp = Math.floor(exp/2);
      }
      return t%N;
    }
    //Convert number to back to alphabet position
      function numToChar(num){
      if(num === 0){
        return ' ';
      }
      else{
      let s = '', t;
    
      while (num > 0) {
        t = (num - 1) % 26;
        s = String.fromCharCode(65 + t) + s;
        num = (num - t)/26 | 0;
      }
      return s || undefined;
      }
    }
    
    //return the decrypted integer array
    function decryptMessage(encrypted, dVal, nVal){
      let decrypted = successiveSquare(encrypted, dVal, nVal);
      return decrypted;
    }
    
    let decryptedMessage = [];
      message.forEach(int => {
      decryptedMessage.push(decryptMessage(int, dVal, nVal));
    })
    
    let alphaNumMessage = [];
      decryptedMessage.forEach((num) => {
        alphaNumMessage.push(numToChar(num));
      })
      return alphaNumMessage;
    }

    export {encryptRSA, decryptRSA}
    