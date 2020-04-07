"use strict"
const confrc = new (require('confrc')).confrc();
const initrc = new (require('initrc')).init();
const http = require('http');

exports.server = function(){
    this.start=function(){
        http.createServer(function (req, res) {
            res.writeHead(
                200, 
                {
                   'Content-Type': 'application/json'
                }
            );
            res.write(response());
            res.end();
        }).listen(
            confrc.get("http").port
        );
    }
    this.stop=function(){ 
        http.close();
    }
}


const response = function(){
     let out = {
         server   : serverConfig.name,
         time     : (+new Date)
     }
     return JSON.stringify(out);
}





