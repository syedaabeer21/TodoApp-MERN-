import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./src/db/index.js"
import todoRoutes from "./src/routes/todos.routes.js"

dotenv.config()
const app = express()


app.use(express.json())
const corsOptions = {
  origin: ['http://localhost:5173' , 'https://to-do-ui-orcin.vercel.app'], // Allow your frontend during development
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  credentials: true, // Include credentials if needed
};

app.use(cors(corsOptions));


app.get('/', (req, res) => {
  res.send('Hello World 122343!')
})

//routes
app.use('/api/v1' , todoRoutes)

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!! ", err);
  });