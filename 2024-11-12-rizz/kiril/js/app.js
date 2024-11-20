function isPrime(num){
    if(num%num === 1 && num%1===num){
        return true
    }
    return false
}

console.log(isPrime(3))