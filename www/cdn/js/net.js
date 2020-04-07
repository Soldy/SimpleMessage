

const netClass= function(){
    this.commandAdd = function(command, func){
        commands[command]=func
    }
    this.send=function(vars, method, timeout){
        if(typeof timeout === "undefined")
             timeout = 2000;
        if(timeout !== parseInt(timeout))
            return false;
        if(current > 10)
            return false;
        if(typeof vars === "undefined")
            return false;
        if(typeof method === "undefined")
            method = "GET";
        if(0 > (['POST','GET','DELETE']).indexOf(method))
            return false;
        let sendId = parseInt(signalI);
        current++;
        let abort = new AbortController();
        let timeout = setTimeout(function(){
            signals(i).abort();
        }, timeout);
        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
             },
             body: JSON.stringify(vars),
             signal: abort.signal
        }).then(function(response) {
            current--;
            delete abort;
            try{ clearTimeout(timeout) }catch(e){};
            if (response.status !== 200)
                return console.log(response);
            response.json().then(function(data) {
                commands[data.c](data.data);
            });
        }).catch(function(err) {
            current--;
            delete abort;
            debug.add(err, 'net');
            try{ clearTimeout(timeout) }catch(e){};
        });
        timeouts.push(function(){
            timeoutFunc(sendId);
        }, timeout);
        signalI++;
    }
    let longPool = async function(){
       while(true)
           await this.send(
               {
                   c:'longpool'
               },
               20000
           );
    }
    let current = 0;
    let signalI = 0;
    let signals = [];
    let timeouts = [];
    let commands={};
    let url = "/json";
    setTimeout(longPool,4000);
}



let net = new netClass();
let consoleCommand = function(data){
    console.log("''"+data.message);
}
net.commandAdd('warning', consoleCommand);
net.commandAdd('debugSent', debug.sent);




