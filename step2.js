const fsP = require("fs/promises");
const axios = require("axios");

async function cat(path) {
  try {
    let contents = await fsP.readFile(path, "utf8");
    console.log("file contents", contents);
  } catch (err) {
    console.log(err)
    process.exit(1);
  }
}

async function webCat(path){
  const resp = await axios.get(path);
  console.log(resp.data.slice(0,100), "...");
}

let path = process.argv[2];

if(path.startsWith("http")){
  webCat(path);
} else {
  cat(path);
}

//is there a better way to check for URL/txt files?