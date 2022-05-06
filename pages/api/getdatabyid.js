import * as fs from 'fs'

export default (req, res) => {
	let id = req.query.id;
	let data = fs.readFileSync("DB/db.json", "utf-8");
	data = JSON.parse(data);
	data = data[id]
	if (data === undefined)
		res.status(401).json({"error": "Blog not found"});
	else
		res.status(200).json(data);
}