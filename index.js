// const fs = require('fs');
// const { readFileSync, writeFileSync } = require('fs');

// const first = readFileSync('./content/first.txt', 'utf8');
// const second = readFileSync('./content/second.txt', 'utf8');

// // console.log(first, second);


// // Example of writing data to a file synchronously
// ;
// writeFileSync(
//     './content/output.txt',
// `Data has been written to :${first},${second}`,
// {flag:'a'}
// )
const { readFile, writeFile } = require('fs')
readFile('./content/first.txt','utf8',(err,result) => {
    if(err){
        console.log(err)
        return
    }
    const first=result
    readFile('./content/second.txt','utf8',(err,result) => {
        if(err){
            console.log(err)
            return 
        }
        const second=result
        writeFile(
            './content/combined.txt',
            `Here is the reslut: ${first} ,${second}`
            ,(err,result)=>{
                if(err){
                    console.log(err)
                    return
                }
                console.log(result)
            })
    })
})