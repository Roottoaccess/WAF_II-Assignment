// Solving the tenth problem.....

const freq_table = (str) => {
    const Countchar = {} // Initializing the emty string.....
    for(let char of str){
        if(Countchar[char]){
            Countchar[char]++
        } else {
            Countchar[char] = 1
        }
    }
    return Countchar
}
const str = "hello world"
// calling the function
console.log(freq_table(str))