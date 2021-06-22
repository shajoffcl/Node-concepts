import { exec } from "child_process";
import utils from 'util';

const execP = utils.promisify(exec);

exec('ls/', (err, stdout, stderr) => {
  console.log(stdout);
});
