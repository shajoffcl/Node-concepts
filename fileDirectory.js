const fs = require("fs");

//create directory
fs.mkdir("assets", (err) => {
  if (err) console.log(err);
  console.log("Directory created");
});

//remove directory
fs.rmdir("assets", (err) => {
  if (err) console.log(err);
  console.log("Directory deleted");
});

//read directory
fs.readdir("assets", (err, files) => {
  if (err) console.log(err);
  console.log(files);
});
