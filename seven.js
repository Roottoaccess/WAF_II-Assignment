// This is the sevent problem....
const words = ["apple", "banana", "cat"];
// logic in the program
const text_length = (words) => {
    const text_len = words.map(word => word.length)
    console.log(text_len)
}
// Calling the function.....
text_length(words)