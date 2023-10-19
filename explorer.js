// Get the file server to read, create, update, delete and rename files
// Get the path to find files
const fs = require("fs");
const path = require("path")

// Function to retrieve files with certain extensions in folder
function folder() {
    let datas = fs.readdirSync(path.resolve(__dirname, "public"))

    let datafiles = datas.filter(data => data.includes('.css'));

    datas.forEach(res => {
        fs.lstatSync(path.resolve(__dirname,"public", res)).isDirectory()
    })

    console.log("public:", datafiles)
}

folder()
