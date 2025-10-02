// creating the function that calculates the total price of item
const cart = [
    { name: "Book", price: 1200, quantity: 2 },
    { name: "Pencil", price: 12, quantity: 5 },
    { name: "Paper", price: 5, quantity: 10 }
  ];
// Logic in the function....
const calculate_items = (cartItems) => {
    let total = 0
    for(let i of cartItems){
        total += i.price * i.quantity
    }
    return total
}
// Calling the function.....
console.log(`The total is: ${calculate_items(cart)}`)