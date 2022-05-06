import * as fs from 'fs'

export default (req, res) => {
	let data = fs.readFileSync("DB/db.json", "utf-8");
	res.status(200).json(JSON.parse(data));
}