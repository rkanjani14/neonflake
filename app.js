import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import web from './routes/web.js'
import cloudinary from './cloudinary/cloudinary.js'
import connectdb from './db/connectdb.js'


// const upload = multer({dist:"uploads"})

const app = express()

const PORT = process.env.PORT

const DATABASE_URL = process.env.DATABASE_URL

app.set('view engine','ejs')

app.use('/static',express.static("public"))

app.use(express.urlencoded({extended:true}))

app.use(express.json())

connectdb(DATABASE_URL)


app.use('/',web)

app.listen(PORT,()=>{
    console.log(`Server running http://localhost:${PORT}`)
})