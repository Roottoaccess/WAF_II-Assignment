// Solving the forth problem.....
const books = [
    { title: "Harry Potter", author: "J.K. Rowling" },
    { title: "The Alchemist", author: "Paulo Coelho" },
    { title: "Atomic Habits", author: "James Clear" }
  ];
// This is the logic for the problem....
const title_extract = (books) => {
    extract_title = books.map(book => book.title)
    return extract_title
}// Calling the function....
console.log(`The book title are : ${title_extract(books)}`)