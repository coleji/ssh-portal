var readline = require('readline');

module.exports = function(filename) {
	return new Promise((resolve, reject) => {
		var rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout
		});

		function hidden(query, callback) {
			var stdin = process.openStdin(),
				i = 0;
			process.stdin.on("data", function(char) {
				char = char + "";
				switch (char) {
				case "\n":
				case "\r":
				case "\u0004":
					stdin.pause();
					break;
				default:
					process.stdout.write("\033[2K\033[200D" + query + "[" + ((i % 2 == 1) ? "=-" : "-=") + "]");
					i++;
					break;
				}
			});

			rl.question(query, function(value) {
				rl.history = rl.history.slice(1);
				rl.close();
				callback(value);
			});
		}

		hidden("Enter passphrase for " + filename + ": ", function(password) {
			resolve(password);
		});
	});
}
