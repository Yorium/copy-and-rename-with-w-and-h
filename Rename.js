var fs = require('fs');
var sizeOf = require('image-size');

// main rename and copy part

fs.readdir(`D:/App/pixivdown/image/`, (err, data) => {
	if (err) {
		throw err;
	}
	fs.writeFile('D:/App/pixivdown/db.txt', JSON.stringify(data, null, '\t'));
});
setTimeout(function() {
	var filePath = 'D:/App/pixivdown/db.txt'; // path to file
	fs.readFile(filePath, "utf-8", function(err, data) { // read file to memory
		if (!err) {
			var array = data.toString().split('\n');
			var uu = array.pop()
			var arr = array.join('\n')
			datat = arr.toString(); // stringify buffer
			var position = datat.toString().indexOf('\n'); // find position of new line element // if new line element found
			datat = datat.substr(position + 1); // subtract string based on first line length
			fs.writeFile(filePath, datat, function(err) { // write file
				if (err) { // if error, report
					console.log(err);
				}
			});
		} else {
			console.log(err);
		}
	});
}, 2000);
setTimeout(function() {
	var LineByLineReader = require('line-by-line'),
		lr = new LineByLineReader("D:/App/pixivdown/db.txt");
	lr.on('line', function(line) {
		// pause emitting of lines...
		lr.pause();
		var lines = line.replace(/(^\s*)|(\s*$)|,|"|'/gi, "");
		var datta = 'D:/App/pixivdown/image/' + lines
		var dimensions = sizeOf(datta);
		if (dimensions.width > dimensions.height) {
		fs.createReadStream(datta).pipe(fs.createWriteStream("D:/App/pixivdown/htemp/" + lines));
		setTimeout(function() {
    var dats = lines.replace(/\uFFFD/g, '');
		var dat = dats.replace(/ /g, '_');
		var datt = dat.replace(/[^a-z0-9A-Z,._?!]/g, '');
    fs.renameSync(`D:/App/pixivdown/htemp/${lines}`, `D:/App/pixivdown/htemp/${datt}`);
		}, 1000);
		} else {
			fs.createReadStream(datta).pipe(fs.createWriteStream("D:/App/pixivdown/vtemp/" + lines));
			setTimeout(function() {
      var dats = lines.replace(/\uFFFD/g, '');
  		var dat = dats.replace(/ /g, '_');
  		var datt = dat.replace(/[^a-z0-9A-Z,._?!]/g, '');
      fs.renameSync(`D:/App/pixivdown/vtemp/${lines}`, `D:/App/pixivdown/vtemp/${datt}`);
			}, 1000);
		};
		setTimeout(function() {
			// ...and continue emitting lines.
			lr.resume();
		}, 400);
	});
	lr.on('end', function() {
		// All lines are read, file is closed now.
	});
}, 4000);

//other rename

fs.readdir(`E:/temp/render/`, (err, data) => {
	if (err) {
		throw err;
	}
	for (var i = 0; i < data.length; i++) {
		var dats = data[i].replace(/\uFFFD/g, '');
		var dat = dats.replace(/ /g, '_');
		var datt = dat.replace(/[^a-z0-9A-Z,._?!]/g, '');
		fs.renameSync(`E:/temp/render/${data[i]}`, `E:/temp/render/${datt}`);
	}
});
fs.readdir(`E:/temp/miku/`, (err, data) => {
	if (err) {
		throw err;
	}
	for (var i = 0; i < data.length; i++) {
		var dats = data[i].replace(/\uFFFD/g, '');
		var dat = dats.replace(/ /g, '_');
		var datt = dat.replace(/[^a-z0-9A-Z,._?!]/g, '');
		fs.renameSync(`E:/temp/miku/${data[i]}`, `E:/temp/miku/${datt}`);
	}
});
fs.readdir(`E:/temp/e/`, (err, data) => {
	if (err) {
		throw err;
	}
	for (var i = 0; i < data.length; i++) {
		var dats = data[i].replace(/\uFFFD/g, '');
		var dat = dats.replace(/ /g, '_');
		var datt = dat.replace(/[^a-z0-9A-Z,._?!]/g, '');
		fs.renameSync(`E:/temp/e/${data[i]}`, `E:/temp/e/${datt}`);
	}
});
fs.readdir(`E:/temp/h/`, (err, data) => {
	if (err) {
		throw err;
	}
	for (var i = 0; i < data.length; i++) {
		var dats = data[i].replace(/\uFFFD/g, '');
		var dat = dats.replace(/ /g, '_');
		var datt = dat.replace(/[^a-z0-9A-Z,._?!]/g, '');
		fs.renameSync(`E:/temp/h/${data[i]}`, `E:/temp/h/${datt}`);
	}
});
fs.readdir(`E:/temp/v/`, (err, data) => {
	if (err) {
		throw err;
	}
	for (var i = 0; i < data.length; i++) {
		var dats = data[i].replace(/\uFFFD/g, '');
		var dat = dats.replace(/ /g, '_');
		var datt = dat.replace(/[^a-z0-9A-Z,._?!]/g, '');
		fs.renameSync(`E:/temp/v/${data[i]}`, `E:/temp/v/${datt}`);
	}
});
fs.readdir(`E:/temp/animal/`, (err, data) => {
	if (err) {
		throw err;
	}
	for (var i = 0; i < data.length; i++) {
		var dats = data[i].replace(/\uFFFD/g, '');
		var dat = dats.replace(/ /g, '_');
		var datt = dat.replace(/[^a-z0-9A-Z,._?!]/g, '');
		fs.renameSync(`E:/temp/animal/${data[i]}`, `E:/temp/animal/${datt}`);
	}
});
