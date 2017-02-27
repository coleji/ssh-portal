var ssh = require('./openConnectionAndExecute');

const connectProps = {
	host: 'localhost',
	port: 22006,
	username: 'root',
	privateKey: require('fs').readFileSync('./key/testkey'),
	passphrase: "11111"
};

ssh(connectProps, 'apt-get dist-upgrade --assume-no').then(result => {
	console.log("returned " + result);
}, err => {
	console.log("Error: " + err);
});
