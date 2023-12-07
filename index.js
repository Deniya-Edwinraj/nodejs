console.log("Boosey");
// alert("Boosey");

// create server

const http=require('http')
const port=3100;
const server=http.createServer((req,res)=>{
     res.statusCode=200;
     res.setHeader=('Content-type','text/html');
     res.end('Hello Ani!');

});
server.listen(port,()=>{
    console.log(`Server running at ${port}`)
});

// create file
const fs=require('fs');
fs.writeFile('file.txt','HELLO ANI!',(err)=>{
    if (err) throw err;
    console.log("data written file")
});

// read file
fs.readFile('file.txt','utf8',(err,data)=>{
     if (err) throw err;
     console.log(data);
});


// HTTPS Module

const https = require('https'); 
  
// Sample URL 
const url = 'https://jsonplaceholder.typicode.com/todos/1'; 
  
const request = https.request(url, (response) => { 
    let data = ''; 
    response.on('data', (chunk) => { 
        data = data + chunk.toString(); 
    }); 
  
    response.on('end', () => { 
        const body = JSON.parse(data); 
        console.log(body); 
    }); 
}) 
  
request.on('error', (error) => { 
    console.log('An error', error); 
}); 
  
request.end()


// get method
// const https = require('https');

// https.get('https://catfact.ninja/fact', (resp)=>{

//   let data = '';

//   // A chunk of data has been received.
//   resp.on('data', (chunk) => {
//     data += chunk;
//   });

//   // The whole response has been received. Print out the result.
//   resp.on('end', () => {
//     console.log(data);
//   });
  
// }).on("error", (err) => {
//     console.log("Error: " + err.message);
// });