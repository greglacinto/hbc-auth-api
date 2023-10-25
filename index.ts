import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from 'dotenv'
import cors, { CorsOptions } from 'cors'

import Routes from './routes/home.routes'

const app : Express = express()
dotenv.config()
const port = process.env.PORT || 3000
const corsOption: CorsOptions = {origin: "*"}

app.use(express.urlencoded({extended: true}))
app.use(express.json()) // body parser
app.use(cors(corsOption))
app.use('/token', Routes) // use routef for token

app.get('/', (req, res) => {
  res.status(200).send({"status": 200, "message": "server is up"})
})

// Add this error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send(err.message);
});

app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`);
})