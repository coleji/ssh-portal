export default function(iniData) {
	var byRowThenCol = [];
	for (var prop in iniData) {
		var regexResult = /([0-9]+),([0-9]+)/.exec(prop);
		if (regexResult == null) continue;
		var row = +regexResult[1];
		var col = +regexResult[2];
		byRowThenCol[row] = byRowThenCol[row] || [];
		byRowThenCol[row][col] = { alias: iniData[prop].alias, response : null };
	}
	return byRowThenCol;
}
