import ini from 'ini';
import fs from 'fs';

const iniData = ini.parse(fs.readFileSync('./ini/private.ini', 'utf-8'));

function getServerList() {
	var byRowThenCol = [];
	for (var prop in iniData) {
		var regexResult = /([0-9]+),([0-9]+)/.exec(prop);
		if (regexResult == null) continue;
		var row = +regexResult[1];
		var col = +regexResult[2];
		byRowThenCol[row] = byRowThenCol[row] || [];
		byRowThenCol[row][col] = iniData[prop].alias;
	}
	return byRowThenCol;
}

export default function(req, res) {
	switch (req.url) {
	case "/serverlist":
		res.send({ data: { serverList : getServerList()}});
		break;
	default:
		res.send("Unknown endpoint");
	}
}
