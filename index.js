// Implement a function that receives two IPv4 addresses, and returns the number of addresses between them 
// (including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one. 


//  Helpful Hint 
//  An IPv4 address has the following format: x . x . x . x 
//  where x is called an octet and must be a decimal value between 0 and 255. 256 in total! 


function ipsBetween(start, end){
    let change = 0 
    start = start.split('.').reverse()
    end = end.split('.').reverse()
    let p = 0
    for (var i = 0; i < start.length; i++) {
        i === 0 ? change += end[i] - start[i] 
        : change += (end[i] - start[i]) * 256**p
        // : change += (end[i] - start[i]) * Math.pow(256, p)
        p++
    }
    return change
} 

console.log(ipsBetween("10.0.0.0", "10.0.0.0"), 0);
console.log(ipsBetween("10.0.0.0", "10.0.0.50"), 50);
console.log(ipsBetween("20.0.0.10", "20.0.1.0"), 246); 
console.log(ipsBetween("180.0.0.0", "181.0.0.0"), 16777216);