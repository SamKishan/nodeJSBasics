// Sampreet Kishan
// First nodeJS web Server code. Listens on port 3000.
// Source :https://blog.risingstack.com/your-first-node-js-http-server/


const http = require('http')
const port = 3000

const requestHandler = (request, response) => {
    console.log(request.url)
    if(request.url=="/hi"){
        console.log("Here I am");
    response.end('The url is:' +request.url+'\nWhat you doing?' +
        '\n' +
        'How are you?')}
    if(request.url=="/favicon.ico")
    {
        console.log("The url is: ")
        console.log(response.url)
        response.end("Favicon")
    }
    if(request.url=='/next')
    {
        response.end("In the next page");
    }
    else
    {
        console.log("The else construct's url is:")
        console.log(response.url)

        html="<html><title>Home page</title> <body><center><font size=+3> Welcome to DragonBallGo" +
            "<form method=post action=/next> Username:" +
            "<input type=text name=username> <br>" +
            "Password :<input type=password name=password> <br>" +
                "<input type=Submit value=Submit name=Submit> </form>"
            "</font></center> Requested url is </body></html>"
        response.end(html);
    }
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
})



