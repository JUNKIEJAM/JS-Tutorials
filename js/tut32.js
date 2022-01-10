//creare a class library and implement the following

//getBookList()
//issueBook(bookname,user)
//returnBook(bookname)
console.log("Tutorial 32");
/*class Library{

    static list=["ABC","DEF","GHI","JKL"];

    constructor(bookName,bookAuthor,bookPrice){
        this.name=bookName;
        this.author=bookAuthor;
        this.price=bookPrice;
    }

    getBookList(){
         return list;
    }

    issueBook(bookname,user){
       
        return `The book with of author ${this.name} had been issued to ${this.user}`;
    }

    returnBook(bookname){
return  `Name of Book : ${this.name}`;
    }

}

harry=new Library("ABC","Prithesh",200);
console.log(harry.getBookList);

console.log(Programmer.issueBook("ABC","Prithesh"));
console.log(Programmer.returnBook("ABC"));

*/
class book{
    static bookList=['rings','hobbit','nostradamos'];
     constructor(bookname,user) {
         this.bookname=bookname;
         this.user=user;
     }
     
 
     getBookList(){
         return `list of books: ${book.bookList}`;
     }
 
     issueBook(bookname,user){
         return `${bookname} is issued to ${user}`;
     }
 
     returnBook(bookname){
         return `${bookname} was returned back to library`;
     }
 }
 
 class library extends book{
    
     constructor(bookname,user,bookList){
         super(bookname,user);
         this.bookList=bookList;
     }
     
 }
 
 let lib=new library('LOTR','arjit',library.bookList);
 console.log(lib);
 console.log(lib.getBookList());
 console.log(lib.issueBook('LOTR','ajay'));
 console.log(lib.returnBook('LOTR'));



