// Solving he sixth problem....
const user = { name: "alice", city: "delhi", hobby: "reading" };
// Appllying the logic
const convert = (user) => {
    let value_change = 0
    for(let val in user){
        value_change = val.toUpperCase();
        console.log(value_change)
    }
}

convert(user) /// Calling the function.....