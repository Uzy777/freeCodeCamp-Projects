const books = [
    {
        title: "Atomic Habits",
        authorName: "James Clear",
        releaseYear: 2024,
    },
    {
        title: "The Embedded Entrepreneur",
        authorName: "Arvid Kahl",
        releaseYear: 2022,
    },
    {
        title: "Zero to Sold",
        authorName: "Arvid Kahl",
        releaseYear: 1920,
    },
]


function sortByYear(book1, book2) {
    if (book1.releaseYear < book2.releaseYear) {
        return -1;
    } else if (book1.releaseYear > book2.releaseYear) {
        return 1;
    } else {
        return 0;
    }
}

const filteredBooks = books.filter(book => book.releaseYear <= 1950);
filteredBooks.sort(sortByYear);



console.log(filteredBooks);