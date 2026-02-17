import express from "express"

const app = express();

const PORT = process.env.PORT || 3333

app.get('/', (req, res) => {
    res.send('Successfully implemented Github Actions , so Hello from Incog !!\n')
})


app.listen(PORT, () => {
    console.log('Server successfully started on port', PORT)
})
