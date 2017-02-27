// {
// 	host: 'localhost',
// 	port: 22006,
// 	username: 'jcole',
// 	privateKey: require('fs').readFileSync('./key/testkey'),
// 	passphrase: "11111"
// }

var connectAndExecute = function(connectProps, command) {
	return new Promise((resolve, reject) => {
		var Client = require('ssh2').Client;
		var lines = [];
		var conn = new Client();
		conn.on('ready', function() {
			conn.exec(command, function(err, stream) {
				if (err) reject(err);
				stream.on('close', function() {
					resolve(lines.join(''));
					conn.end();
				}).on('data', function(data) {
					lines.push(data);
				});
			});
		}).connect(connectProps);
	});
};

export default connectAndExecute;
