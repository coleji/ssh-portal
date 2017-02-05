import getServerList from './getServerList';
import findServerConfig from './findServerConfigByName';
import getPassphrase from './getPassphrase';

var passphrases = {};

const sendCommand = function(iniData, serverName) {
	console.log("!! " + serverName);
	var server = findServerConfig(iniData, serverName);
	return Promise.resolve().then(() => {
		if (!passphrases[server.key]) {
			return getPassphrase(iniData.keys[server.key]).then(passphrase => {
				passphrases[server.key] = passphrase;
				return Promise.resolve();
			});
		} else return Promise.resolve();
	});
};

export default function(req, res) {
	console.log(req.url);
	var urlComponents = req.url.split('/');
	urlComponents.splice(0,1);
	console.log(urlComponents.join(','));
	switch (urlComponents[0]) {
	case "serverlist":
		res.send({ data: { serverList : getServerList(req.iniData)}});
		break;
	case "dryrun":
		sendCommand(req.iniData, urlComponents[1]).then(msg => {
			res.send(msg);
		}, err => {
			console.log(err);
			res.send("error!");
		});
		break;
	default:
		res.send("Unknown endpoint");
	}
}
