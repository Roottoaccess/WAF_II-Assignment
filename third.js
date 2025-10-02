// solving the third problem......
full_name = "Biswarup Dutta"
// This is the logic
const name_extract = (name) => {
    first_name = name.split(' ')
    return first_name[0]
} // Calling the function....
console.log(`The first name is: ${name_extract(full_name)}`)