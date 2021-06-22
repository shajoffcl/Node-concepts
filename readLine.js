const readLine = require("readline");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const answer = "delhi";

rl.question("what is capital of india?\n", (input) => {
  if (input.trim() == answer) {
    console.log("correct answer");
    rl.close();
  } else {
    rl.setPrompt("incorrect answer, please try again\n");
    rl.prompt();
    rl.on("line", (input) => {
      if (input.trim() == answer) {
        console.log("correct answer");
        rl.close();
      } else {
        rl.setPrompt("incorrect answer, please try again\n");
        rl.prompt();
      }
    });
  }
});
