// Book  Constructor
function Book(tittle, author, isbn) {
    this.tittle = tittle;
    this.author = author;
    this.isbn = isbn;
}

// UI  Constructor
function UI() { }

// Event listners
document.getElementById('book-form').addEventListener('sumbit',
    function (e) {
        // Get form value
        const tittle = document.getElementById('tittle').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value

        // Instantitate book
        const book = new book(tittle, author, isbn);

        console.log(book);

        e.preventDefault();
    });
