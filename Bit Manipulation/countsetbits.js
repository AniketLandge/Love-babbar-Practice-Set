//Count set bits in an integer

//5 
// 101 => make & by 1 
//101
//001 = 001


let setBit = (n) => {
    let count = 0;
    while(n) {
        let bit =  n&1;
        if(bit) count++
        n = n>>1 
    }
    return count;
}


console.log(setBit(15)); 