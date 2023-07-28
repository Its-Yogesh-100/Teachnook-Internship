var portocol=require("http")
portocol.createServer(function (req,res){

    res.writeHead(200,{'content-Type';'text/plain'})
    res.end("Introduction to node js")
}).listen(1234)