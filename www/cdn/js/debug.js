

const debugClass = function(){
    this.add = function(data, modul){
        let time = (+new Date);
        out = {
           time,
           data,
           modul
        };
        db.push(out);
        console.log(out);
        return true;
    }
    this.sent = function(){
        run = false;
        sendDb = false;
    }
    this.send = function(){
       if(run === true)
           return false;
       if(1 > db.length)
           return false;
       return send();
    }
    let send = function(){
        if(sentDb === false)
            sentDb = JSON.parse(
               JSON.stringify(db)
            );
        net.send({
            c : 'debug',
            data:sentDb
        );
    }
    let clear = function(){
       db = [];
    }
    let run = false;
    let db = [];
    let sentDb = false;
}

const debug = new debugClass();

