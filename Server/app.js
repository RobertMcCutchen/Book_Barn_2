//First, I have to declare that I will be using express for this project
const express = require('express')
const app = express()
const cors = require('cors')
const models = require('./models')

//Then, I set up my middleware.
app.use(cors())
app.use(express.json())

//Get all books
app.get('/books',(req,res) => {
    models.Book.findAll().then(books => res.json(books))
})

//Post books to state
app.post('/add-book',(req,res) => {
    let title = req.body.title
    let genre = req.body.genre
    let publisher = req.body.publisher
    let year = req.body.year
    let imageURL = req.body.imageURL
    
    //Create the book instance 
    let book = models.Book.build({
        title: title,
        genre: genre,
        publisher: publisher,
        year: year,
        imageURL: imageURL,    
    })

    // save the trip instance/object to the database 
    book.save().then(savedBook => res.json(savedBook))
    .catch(error => console.log(error))    

})

//Update book
app.post('/update-book',(req,res) => {
    let title = req.body.title
    let genre = req.body.genre
    let publisher = req.body.publisher
    let year = req.body.year
    let imageURL = req.body.imageURL
    let bookId = parseInt(req.body.bookId) 

    models.Trip.update({
        title: title,
        genre: genre,
        publisher: publisher,
        year: year,
        imageURL: imageURL,  
    },{
        where: {
            id: bookId
        }
    }).then(updatedBook => res.json(updatedBook))


})

//Delete book from database
app.post('/delete-book',(req, res) => {
    
    let id = req.body.id

console.log(id)

    models.Book.destroy({
        where: {
            id: id
        }
    }).then(deletedBook => res.json(deletedBook))

})

app.listen(3001, () => {
    console.log('Server is running...')
})