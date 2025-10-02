// Solving the eight program.....
const findCommon = (User1, User2) => {
    const set2 = new Set(User1); // Converting it into set....
    const common = User1.filter(interest => set2.has(interest));

    return common;
}
const user1 = ["music", "movies", "sports"];
const user2 = ["travel", "movies", "sports", "reading"];

console.log(`The interest are: ${findCommon(user1,user2)}`)