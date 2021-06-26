const path = require('path') //use to get and join file path
const fs = require('fs')  // use to manipulate files
const {persons, students} = require('./practice')
const readFileToServer = require('./serverFile')
const http = require('http') // this is used to read http files


//=========================CREATING A LOCAL SERVER============================

const server = http.createServer((req, res)=>{
    
    // Using the switch function to return the links to the pages
    switch(req.url) {
        case "/":
            const home = path.join(__dirname, 'HTML-files/index.html');
            const homeData = readFileToServer(home);
            res.writeHead(200, {'content-type':'text/html'});
            res.write(homeData.file);
            res.end();
            break;

        case "/about":
            const about = path.join(__dirname, 'HTML-files/about.html');
            const aboutData = readFileToServer(about);
            res.writeHead(200, {'content-type':'text/html'});
            res.write(aboutData.file);
            res.end();
            break;

        case "/contact":
            const contact = path.join(__dirname, 'HTML-files/contact.html');
            const contactData = readFileToServer(contact) 
            res.writeHead(200, {'content-type':'text/html'});
            res.write(contactData.file);
            res.end();
            break;

        case "/api/person":
            // const studentData = fs.readFileSync(persons)
            // instead of the above, we will user the JSON stringify method
            res.writeHead(200, {'content-type':'application/JSON'});
            res.write(JSON.stringify(persons));
            res.end();
            break;

        case "/api/students":
            // const studentData = fs.readFileSync(students)
            // instead of the above, we will user the JSON stringify method
            res.writeHead(200, {'content-type':'application/JSON'});
            res.write(JSON.stringify(students));
            res.end();
            break;
        
        default:
            res.writeHead(404, {'content-type':'text/html'});
            res.write('<h1>page not found</h1>');
            res.end();

    }
    
})

const PORT = 5000;

server.listen(PORT, ()=> {
    console.log(`server is running on http://localhost:${PORT} \n
reload server to see new file changes;`)
})
