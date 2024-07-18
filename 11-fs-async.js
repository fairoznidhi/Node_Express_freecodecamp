//multiple user at a time kaj korte parbe
const { readFile, writeFile } = require("fs");

console.log('start');
readFile("./content/first.txt", "utf8", (err, result) => {
  //err,result er serial maintain korte hbe
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  //   console.log(first);
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    // console.log(second);
    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('done with this task');
      }
    );
  });
});
console.log('starting the next one');//eta sheshe diyechi taw output:
// start
// starting the next one
// done with this task
