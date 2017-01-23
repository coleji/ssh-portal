var getPassphrase = require("./getPassphrase");
var openConnectionAndExecute = require("./openConnectionAndExecute");

var fs = require('fs');
var ini = require('ini');

var iniSettings = ini.parse(fs.readFileSync('./ini/private.ini', 'utf-8'));
var server = iniSettings["0,0"]
var keys = iniSettings.keys
console.log(server)
console.log(keys)

var passphrases = {};

// TODO: This assumes exactly two keys defined, "personal" and "cbi"
// until I can figure out how to execute n promises in sequence
getPassphrase(keys.personal).then(v => {
	passphrases.personal = v;
	return getPassphrase(keys.cbi);
}).then(v => {
	passphrases.cbi = v;
	return openConnectionAndExecute({
		host: server.host,
		port: server.port,
		username: server.user,
		privateKey: require('fs').readFileSync(keys[server.key]),
		passphrase: passphrases[server.key]
	}, "pwd");
}).then(stdout => {
	console.log("SSH SESSION RETURNED: " + stdout);
}).catch(err => {
	console.log(err);
}).then(() => {
	process.stdin.destroy();
})
