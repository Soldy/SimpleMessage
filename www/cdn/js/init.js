const initClass =function(){
    this.init = function (){
         init();
    }
    /*
     *
     * @public
     */
    this.start={
        add:function(fun, level, name){
            add('start', fun, level, name);
        },
        run: async function(){
            execute(levels.start);
        }
    }
    /*
     * @public
     */
    this.main={
        add:function(fun,name){
            add('main', fun, 0, name);
        },
        run: async function(){
            execute(levels.main);
        }

    }
    /*
     * @public
     */
    this.stop={
        add:function(fun, level, name){
            add('stop', fun, level, name);
        },
        run: async function(){
            execute(levels.stop);
        }
    }
    /*
     * @private
     */
    let levels={
        start:[],
        stop:[],
        main:[],
        level:0,
        async:false,
        forward:true,
        i:0
    }
    /*
     * @param integer {numb}
     * @private
     */
     let arrayMaker=function(numb){
        out=[];
        for(let i =0; numb> i; i++)
           out.push([]);
        return out;
    }
    /*
     * @private
     */
    let init = function(){
         levels.start = arrayMaker(11);
         levels.stop = arrayMaker(11);
         levels.main = arrayMaker(1);
    }
    /*
     * @param string {even}
     * @param function {func}
     * @param integer {level}
     * @param string {name}
     * @private
     */
    let add = function(even, fun, level, name){
         if(
             (0>["start", "stop", "main"].indexOf(even))||
             (parseInt(level) > levels[even].length-1)||
             (0>parseInt(level))||
             (typeof fun !== "function")
         )
            return false;
        levels[even][level].push({
            fun:fun, 
            name:name
        });
        return true;

    }
    /*
     * @param array {level}
     * @private
     */
    let execute=async function(level){
        for (let p = 0; level.length > p; p++) 
            for (let i = 0; level[p].length > i; i++) 
                await run(level[p][i])
    }
    /*
     * @param object {process}
     * @private
     */
     let run = async function(process){
        if(process.fun.constructor.name === "AsyncFunction"){
            await process.fun();
        }else{
            process.fun();
        }
        return true;
    }
}

let init = new initClass();
init.inti();



