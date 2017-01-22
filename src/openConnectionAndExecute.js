var Client = require('ssh2').Client;

module.exports = function(connectOptions, command) {
	return new Promise((resolve, reject) => {
		var results = "";
		var conn = new Client();
		conn.on('ready', function() {
			console.log('Client :: ready');
			conn.exec(command, function(err, stream) {
				if (err) throw err;
				stream.on('close', function(code, signal) {
					console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
					conn.end();
					resolve(results);
				}).on('data', function(data) {
					console.log('STDOUT: ' + data);
					results += data+ "\n";
				}).stderr.on('data', function(data) {
					console.log('STDERR: ' + data);
				});
			});
		}).connect(connectOptions);
	});
}
