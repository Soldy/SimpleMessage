
const initClass=function(){
    this.levels={
        start:[],
        stop:[],
        main:[],
        level:0,
        async:false,
        forward:true,
        i:0
    }
    this.execute=async function(levels){
        for (let p = 0; levels.length > p; p++) 
            for (let i = 0; levels[p].length > i; i++) 
                await this.run(levels[p][i])
    }
    this.run = async function(level){
        console.log(level);
        if(level.fun.constructor.name === "AsyncFunction"){
            await level.fun();
        }else{
            level.fun();
        }
        return true;
    }
    this.addb = function(even, fun, level, name){
         if(
             (0>["start", "stop", "main"].indexOf(even))||
             (parseInt(level) > this.levels[even].length-1)||
             (0>parseInt(level))||
             (typeof fun !== "function")
         )
            return false;
        this.levels[even][level].push({
            fun:fun, 
            name:name
        });
        return true;

    }
    this.start={
        add:function(fun, level, name){
            ihis.addb('start', fun, level, name);
        },
        run: async function(){
            ihis.execute(ihis.levels.start);
        }
    }
    this.main={
        add:function(fun,name){
            this.addb('main', fun, 0, name);
        },
        run: async function(){
            this.execute(this.levels.main);
        }

    }
    this.stop={
        add:function(fun, level, name){
            ihis.addb('stop', fun, level, name);
        },
        run: async function(){
            ihis.execute(ihis.levels.stop);
        }
    }
    this.arrayMaker=function(numb){
        out=[];
        for(let i =0; numb> i; i++)
           out.push([]);
        return out;
    }
    this.init = function(){
         this.levels.start = this.arrayMaker(11);
         this.levels.stop = this.arrayMaker(11);
         this.levels.main = this.arrayMaker(1);
    }
}

let init = new initClass();
window.onload = init.init;

