import * as fs from 'fs'

export default (req, res) => {
	let data = fs.readFileSync("DB/db.json", "utf-8");
	let count = Object.keys(JSON.parse(data)).length;
	res.status(200).json({"count": count});
}