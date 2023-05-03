//Count set bits in an integer

//5 
// 101 => make & by 1 
//101
//001 = 001


let setBit = (n) => {
    let count = 0; // initial count
    while(n) {
        let bit =  n&1; // logical AND operation
        if(bit) count++
        n = n>>1 //right shift 
    }
    return count;
}


console.log(setBit(15)); 