const fs = require("fs");

//create a file
fs.writeFile("example.txt", "This is an example", (err) => {
  if (err) console.log(err);
  console.log("file succesfully created");
});

//read the file
fs.readFile("example.txt", "utf8", (err, file) => {
  if (err) console.log(err);
  console.log("*******Reading********");
  console.log(file);
});

//rename the file
fs.rename("example.txt", "file.txt", (err) => {
  if (err) console.log(err);
  else console.log("file rename successfully");
});

//append data to file
fs.appendFile("file.txt", "\ndata added", (err) => {
  if (err) console.log(err);
  console.log("data appended");
});

//delete file
fs.unlink("file.txt", (err) => {
  if (err) console.log(err);
  console.log("deleted file");
});
