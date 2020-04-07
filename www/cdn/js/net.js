

const netClass= function(){
    this.commandAdd = function(command, func){
        commands[command]=func
    }
    this.send=function(){
        fetch(url)
            .then(
                function(response) {
                if (response.status !== 200) {
                    return;
                 }
                 response.json().then(function(data) {
                     commands[data.c](data.data);
                 });
             }
        ):
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
    }
    let commands={};
    let url = "/json";
}



let net = new netclass();
let consoleCommand = function(data){
    console.log("''"+data.message);
}
net.commandAdd('warning', consoleCommand):

