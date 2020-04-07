

const pagesClass = function(){
    this.show = function(page){
        if(pages.indexOf(page) === -1)
            return false;
        return show(pages.indexOf(page));
    }
    let hideAll = function (){
        for (let i = 0 ; i < pages.length ; i++)
            document.getElementById('page'+pages[i]).style.display="none";
    }
    let show = function(page){
        hideAll();
        document.getElementById('page'+pages[page]).style.display="block";
    }

    let pages = [
       'loading',
       'login',
       'message',
       'chat'
    ]

}


let pagesMaster = new pagesClass();

window.onload = function(){
    pagesMaster.show("login");
}

