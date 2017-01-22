var getPassphrase = require("./getPassphrase");

getPassphrase("test1").then(passphrase => {
	console.log("got '" + passphrase + "'")
}, err => {
	console.log(err)
})

/*
var Client = require('ssh2').Client;

var conn = new Client();
conn.on('ready', function() {
	console.log('Client :: ready');
	conn.shell(function(err, stream) {
		if (err) throw err;
		stream.on('close', function() {
			console.log('Stream :: close');
			conn.end();
		}).on('data', function(data) {
			console.log('STDOUT: ' + data);
		}).stderr.on('data', function(data) {
			console.log('STDERR: ' + data);
		});
		stream.end('ls -l\nexit\n');
	});
}).connect({
	host: '10.0.0.17',
	port: 22,
	username: 'jcole',
	privateKey: require('fs').readFileSync('/home/jcole/.ssh/jcole-personal-2017-01-01')
});*/
