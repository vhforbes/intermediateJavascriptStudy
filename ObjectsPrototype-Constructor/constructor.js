
 
   // Write a constructor for making “Book” objects
 
function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    console.log(title, 'written by', author, pages, 'pages,', wasRead(read))
  }
  function wasRead (read) {
    return read ? 'already read' : 'not read yet'
  }
}



const book1 = new Book('Outliers: The Story of Success', 'Malcolm Gladwell', '304', true)

function Book2(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  
}

function wasRead (read) {
    return read ? 'already read' : 'not read yet'
  }

Book2.prototype.infou = function() {
    console.log(this.title, 'written by', this.author, this.pages, 'pages,', wasRead(this.read))
  }

let book2 = new Book2

book2.infou()


