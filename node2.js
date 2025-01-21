const fs=require("fs");
let text=fs.readFileSync("text.txt","utf-8")
text=text.replace("defined","called")

console.log("The content of the file is ")
console.log(text)

console.log("Creating new file")
fs.writeFileSync("text1.txt",text);