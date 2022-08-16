const fsP = require("fs/promises");

async function cat(path) {
  try {
    let contents = await fsP.readFile(path, "utf8");
    console.log("file contents:", contents);
  } catch (err) {
    console.log(err)
    process.exit(1);
  }
}
console.log(process.argv)
cat(process.argv[2])