const fs = require("fs");
var path = require('path');
var files = fs.readdirSync("files");
var filter = "bti";

if(fs.existsSync("files")) {
console.log("FILES DIR EXISTS......");
} else {
    fs.mkdirSync("files");
}

for(var i=0;i<files.length;i++){
    var filename = path.join("files",files[i]);
    var stat = fs.lstatSync(filename);
    if (stat.isDirectory()){
         //WELL YOUR FUCKED IF THIS IS TRUE XD
    }
    else if (filename.indexOf(filter)>=0) {
        console.log('Found path: ', filename);
        var filenametoString = filename.toString();
        var filename_name = filenametoString.replace(".bti", "");
        var final = filename_name.replace("files\\", "");
        console.log("[" + final + "]");

        fs.readFile('files/' + final + ".bti", (err, data) => {

            var str = data;
            var check = data[0].toString(16);
            
            if(check == "5") {
                console.log("[" + final + "]" + ": " + "RBG5A3");
            } else if(check == "0") {
                console.log("[" + final + "]" + ": " + "I4");
            } else if(check == "1") {
                console.log("[" + final + "]" + ": " + "I8");
            } else if(check == "2") {
                console.log("[" + final + "]" + ": " + "IA4");
            } else if(check == "3") {
                console.log("[" + final + "]" + ": " + "IA8");
            } else if(check == "4") {
                console.log("[" + final + "]" + ": " + "RGB565");
            } else if(check == "6") {
                console.log("[" + final + "]" + ": " + "RGBA32");
            } else if(check == "8") {
                console.log("[" + final + "]" + ": " + "C4");
            } else if(check == "9") {
                console.log("[" + final + "]" + ": " + "C8");
            } else if(check == "A") {
                console.log("[" + final + "]" + ": " + "C14X2");
            } else if(check == "E") {
                console.log("[" + final + "]" + ": " + "CMPR");
            }
        });
}}