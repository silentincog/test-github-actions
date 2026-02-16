import express from "express"

const app = express();

const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.send('Hello Incog Cyberpunk here !!')
})


app.listen(PORT, () => {
    console.log('Server successfully started on port', PORT)
})
