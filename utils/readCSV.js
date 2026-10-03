const fs = require('fs')
const {parse}=require('csv-parse/sync')

function readCSV(filePath){
    const fileContent = fs.readFileSync(filePath,'utf-8')

const records =  parse(fileContent,{columns:true,skip_empty_lines:true})
return records
}

module.exports=readCSV