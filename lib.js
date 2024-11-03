let dialog = document.querySelector("#dialog");
let add = document.querySelector("#add");
let cancel = document.querySelector("#cancel");
let submit = document.querySelector("#submit");
const myLibrary = [];

function Book( title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}
function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#number").value;
    let read = document.querySelector("#checkbox").checked;
    


    let newbook = new Book(title,author,pages,read);
    myLibrary.push(newbook);

    display(newbook);



}
function display(book){
    let card = document.querySelector("#card");
    const bookCard = document.createElement("div");
    bookCard.classList.add("card");

    bookCard.innerHTML = `
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Read: ${book.read ? "Yes" : "No"}</p>`;
   

    let remove = document.createElement("button");
    remove.classList.add("remove");
    remove.innerHTML ="REMOVE";

    remove.addEventListener("click",()=>{
        const index = myLibrary.indexOf(book);  
        if (index > -1) {
            myLibrary.splice(index, 1);   
        }
        bookCard.remove();   
      
    });
   

    bookCard.appendChild(remove);
    card.appendChild(bookCard);
}
let books = [
    new Book("The Great Gatsby", "F. Scott Fitzgerald", 218, true),
    new Book("To Kill a Mockingbird", "Harper Lee", 281, false),
    new Book("1984", "George Orwell", 328, true),
];

books.forEach(book => {
    myLibrary.push(book); 
    display(book); 
});


submit.addEventListener("click",(event)=>{
    event.preventDefault();
    addBookToLibrary();
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#number").value = "";
    document.querySelector("#checkbox").checked = false;
    dialog.close();

})

add.addEventListener("click", () => {
    dialog.showModal();
});
cancel.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.close();
   
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#number").value = "";
    document.querySelector("#checkbox").checked = false;
});