document.addEventListener('DOMContentLoaded', function () {
    const bookForm = document.getElementById('bookForm');
    const bookTable = document.querySelector('#bookTable tbody');

    bookForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const year = document.getElementById('year').value;
        addBook(title, author, year);
        bookForm.reset();
    });

    function addBook(title, author, year) {
        const row = bookTable.insertRow();
        row.innerHTML = `
            <td>${title}</td>
            <td>${author}</td>
            <td>${year}</td>
            <td><button class="edit-btn">Edit</button></td>
        `;
        row.querySelector('.edit-btn').addEventListener('click', function () {
            editBook(row);
        });
    }

    function editBook(row) {
        const title = row.cells[0].textContent;
        const author = row.cells[1].textContent;
        const year = row.cells[2].textContent;
        const newTitle = prompt('Enter new title:', title);
        const newAuthor = prompt('Enter new author:', author);
        const newYear = prompt('Enter new year:', year);
        if (newTitle && newAuthor && newYear) {
            row.cells[0].textContent = newTitle;
            row.cells[1].textContent = newAuthor;
            row.cells[2].textContent = newYear;
        }
    }
});

