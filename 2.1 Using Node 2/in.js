// syntax is:
// fs.writeFile("filename.filetype","content in the file",callback function{}); 

// This code uses the fs.writeFile() method from Node's built-in File System (fs) module to write data to a file.

// This is an asynchronous operation, meaning the program doesn't wait for the file to be written before moving on to execute other code. The callback function is only executed once the file operation is complete.


// const fs = require("fs") is doing two main things:

// require("fs") is Node.js's way of importing modules. Here it's importing the built-in File System (fs) module, which provides functionality for interacting with files on your computer. This includes:

// Reading files
// Writing files
// Creating directories
// Deleting files
// Updating file permissions
// And many other file-related operations


// const fs creates a constant variable named fs that stores all the functionality from the File System module. Once declared, you can use this variable to access any method from the module like:

// fs.readFile()
// fs.writeFile()
// fs.mkdir()
// fs.unlink()



const fs=require("fs");
// fs.writeFile("message.txt","hello from NodeJS",(err)=>{
//     if(err) throw err;
//     console.log("File created successfully!");
// });

fs.readFile("./message.txt",'utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data);
});