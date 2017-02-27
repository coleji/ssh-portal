export default function(iniData, serverName) {
	for (var prop in iniData) {
		if (prop == 'keys') continue;
		if (iniData[prop].alias == serverName) return iniData[prop];
		else console.log(iniData[prop].alias + " != " + serverName);
	}
	return null;
}
