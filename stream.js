const fs = require("fs");
const zlib = require('zlib');

//readable stream
const readStream = fs.createReadStream("./example.txt", "utf8");
const writeStream = fs.createWriteStream("sample.txt.gz");

const gzip = zlib.createGzip();


//method one-->
readStream.on("data", (chunk) => {
  console.log("data writing.....");
  writeStream.write(chunk);
});

//method two-->
readStream.pipe(gzip).pipe(writeStream);

/*

 stream is good to read large file 
 and write large file

*/
