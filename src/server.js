import express from "express";
import fs from "fs";
import cors from 'cors';

const app = express()
app.use(cors());
app.use(express.json())

app.get('/todos', (req, res) => {
	const fileData = fs.readFileSync('data.json', 'utf8');
	const cleanFileData = JSON.parse(fileData);
	res.json(cleanFileData);
});

app.post('/todos', (req,res) => {
const fileData = fs.readFileSync('data.json', 'utf8')
const fileDataArr = JSON.parse(fileData)
fileDataArr.push(req.body);
fs.writeFileSync('data.json', JSON.stringify(fileDataArr));
res.json({message:'it worked buddy'})
})

app.listen(8000, () => console.log('Server running on port 8000!'));