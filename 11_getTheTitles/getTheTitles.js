const getTheTitles = function(books) {
    const newArray  = books.map((book)=>{
        return book.title
    })
    return newArray
};

// Do not edit below this line
module.exports = getTheTitles;
