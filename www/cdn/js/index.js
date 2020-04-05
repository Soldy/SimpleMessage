const listManagerClass = function (){
    this.add = function(obj){
        lists.push(obj);
        return lists[lists.length-1];
    }
    this.obj = function(get){
        if(typeof get === "undefined")
            return lists[current];
        return lists[get];
    }
    this.refresh = function(){
        render();
    }
    this.prev = function(){
        if(1>current)
            return false;
        currrent--;
        render();
    }
    this.next = function(){
        if(current+2>lists.length)
            return false;
        current++;
        render();
    }
    let render = function(){
        lists[current].render();
    }
    let current = 0;
    let lists = [];
}
const stepListClass = function(titleIn){
   this.add = function(...boxIn){
       for(let i of boxIn)
           boxes.push(i);
   }
   this.render=function(){
       renderTitle();
       for(let i in boxes)
           renderBox(i);
       document.getElementById('oktatoZona').innerHTML=rendered;
       return rendered;
   }
   let renderTitle = function(){
       rendered = '<div class="title">'+title+"</div>"
   }
   let renderBox = function(i){
       rendered += '<div class="box">';
       rendered += '<div class="boxTitle">'+boxes[i].title+"</div>";
       if(typeof boxes[i].comment !== "undefined")
           rendered += '<div class="boxComment">'+boxes[i].comment+"</div>";
       rendered += "</div>";
   }
   let title = titleIn;
   let rendered = "";
   let boxes = [];

}