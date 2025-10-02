// Solving the ninth problem.....
const validation = {
    email: 'netwok@gmail.com',
    password: 'Bisso@1234',
    capcha: 'Zp$1@cc'
}
// This is the main logic behind it....
const rem_valid = (validation) => {
    const new_validation = {
        ...validation
    }
    delete new_validation['capcha'];
    return new_validation;
}
console.log(rem_valid(validation)) // Printing the result and calling the function.....