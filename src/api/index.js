import getServerList from './getServerList';
import openConnectionAndExecute from './ssh/openConnectionAndExecute';
import findServerConfigByName from './findServerConfigByName';
import fs from 'fs';

var passphrases = {};

const getKeyList = function(iniData) {
	var keyList = [];
	for (var p in iniData.keys) {
		keyList.push({
			alias: p,
			unlocked: (undefined !== passphrases[p])
		});
	}
	return keyList;
};

export default function(req, res) {
	var urlComponents = req.url.split('/');
	urlComponents.splice(0,1);
	switch (urlComponents[0]) {
	case "serverlist":
		res.send({ data: { serverList : getServerList(req.iniData)}});
		break;
	case "keyList":
		res.send({data: { keyList : getKeyList(req.iniData)}});
		break;
	case "unlock":
		console.log("recevied unlock post, alias was " + req.body.alias + ", passphrase was " + req.body.passphrase);
		passphrases[req.body.alias] = req.body.passphrase;
		res.send({data: {}});
		break;
	case "getUpdates":
		var serverConfig = findServerConfigByName(req.iniData, urlComponents[1]);
		serverConfig.privateKey = fs.readFileSync(req.iniData.keys[serverConfig.key]);
		serverConfig.passphrase = passphrases[serverConfig.key];
		openConnectionAndExecute(serverConfig, "apt-get dist-upgrade --assume-no").then(response => {
			res.send({data: {response}});
		}, err => {
			console.log("%%%% " + err);
			res.send({data: {response: "Error: " + err}});
		});
		break;
	case "update":
		var serverConfig = findServerConfigByName(req.iniData, urlComponents[1]);
		serverConfig.privateKey = fs.readFileSync(req.iniData.keys[serverConfig.key]);
		serverConfig.passphrase = passphrases[serverConfig.key];
		openConnectionAndExecute(serverConfig, "apt-get dist-upgrade -y").then(response => {
			res.send({data: {response}});
		}, err => {
			console.log("%%%% " + err);
			res.send({data: {response: "Error: " + err}});
		});
		break;
	default:
		res.send("Unknown endpoint");
	}
}
