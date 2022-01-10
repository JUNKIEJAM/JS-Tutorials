
class Library{
    constructor(bookList){
        this.bookList=bookList;
        this.issueBook={};
    }

    getBookList(){
        this.bookList.forEach(element=>{
            console.log(element);
        });
    }

    issueBook(bookName,user){

        if(this.issueBook[bookName]==undefined){

        
        this.issuedBooks[bookName]=user;
    }
else{
    console.log('This book is already issued');
}
}


    returnBook(bookName,){
        delete this.issuedBook[bookName];
    }
}