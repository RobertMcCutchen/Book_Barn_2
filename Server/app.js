//First, I have to declare that I will be using express for this project
const express = require('express')
const app = express()
const cors = require('cors')
const models = require('./models')
var jwt = require('jsonwebtoken')

//Then, I set up my middleware.
app.use(cors())
app.use(express.json())

//Middleware implementation
app.all('/api/*', (re, res, next) => {
    //middleware
    console.log('middleware called...')
    let headers = req.headers['authorization']
    
    if(headers) {
        const token = headers.split(' ')[1]
        var decoded = jwt.verify(token, 'someprivatekey');
        if(decoded) {
            const username = decoded.username
            //Check in the database if the user exists
            const persistedUser = users.find(u => u.username == username)
            if(persistedUser) {
                next()
            } else {
                res.json({error: 'Invalid credentials'})
            }
        } else {
            res.json({error: 'Unauthorised access'})
        }
    } else {
        res.json({error: 'Unauthorised access'})
    }
})

//Get all books
app.get('/api/books',(req,res) => {
    models.Book.findAll().then(books => res.json(books))
})

//Post books to state
app.post('/add-book',(req,res) => {
    let title = req.body.title
    let genre = req.body.genre
    let author = req.body.author
    let year = req.body.year
    let imageURL = req.body.imageURL
    
    //Create the book instance 
    let book = models.Book.build({
        title: title,
        genre: genre,
        author: author,
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
    let author = req.body.author
    let year = req.body.year
    let imageURL = req.body.imageURL
    let bookId = parseInt(req.body.bookId) 

    models.Book.update({
        title: title,
        genre: genre,
        author: author,
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

//Login
app.post('/login', (req,res) => {
    const username = req.body.username
    const password = req.body.password

    let persistedUser = user.find(user => user.username == username && user.password == password)

    if(persistedUser) {
        var token = jwt.sign({username: username}, 'someprivatekey')
        res.json({token: token})
    } else {
        //Credentials are not valid
        res.status(401).json({error: 'Invalid credentials'})
    }
})

//Register
app.post('/register', (req,res) => {
    let username = req.body.username
    let password = req.body.password
    console.log(username)
    console.log(password)
    //Create the user instance 
    let user = models.User.build({
        username: username,
        password: password,  
    })

    // save the trip instance/object to the database 
    user.save().then(savedUser => res.json(savedUser))
    .catch(error => console.log(error))    
})

app.listen(3001, () => {
    console.log('Server is running...')
})