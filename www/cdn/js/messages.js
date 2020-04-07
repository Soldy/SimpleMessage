const messagesListClass = function () {
    this.add = function (properties) {
        if (typeof properties === "undefined")
            return false;
        
        lists[properties.id] = new messageListClass(properties.id);
        lists[properties.id].adds(properties);
        
        return true;
    }
    this.set = function (id, property, val) {
        if (typeof lists[id] === "undefined")
            return false;
        return lists[id].set(property, val);
    }
    this.del = function (id) {
        clear(id);
        document.getElementById('chatuserlist-userbox-' + id).outerHTML = "";
    }
    this.render = function () {
        document.getElementById('chat-userchat').innerHTML = render();
    }
    let render = function () {
        let out = "<div>";
        
        for (let i in lists) {

            out += renderBox(i, lists[i].render());
        }
        out += "</div>";
        return out;
    }

    let renderBox = function (id, input) {
        let out = "";
        out += '<div class="chatmessagelist-messagebox" id="chatmessagelist-messagebox-' + id + '">';
        out += input;
        out += '</div>';
        return out;
    }
    let clearAll = function () {
        for (let i in lists)
            delete lists[i];
        lists = {};
    }
    let clear = function (id) {
        if (typeof id === "undefined" || typeof lists[id] === "undefined")
            return false;
        delete lists[i];
        return true;
    }
    let lists = {};
}

const messageListClass = function (id) {
    this.adds = function (properties) {
        if (typeof properties === "undefined")
            return false;
        for (let i in properties)
            this.set(i, properties[i]);

    }
    this.set = function (property, val) {
        if (typeof val === "undefined" || property === "id")
            return false;
        if (typeof properties[property] === "undefined") 
            return false;
        db[property] = val;
        return true;
    }
    this.get = function (property) {
        return db[property];
    }
    this.render = function () {
        let rendered = "";
        let rendered_layer = ""
        rendered += "<div id='chat-messagebox-" + db.id + "' class='chat-messagebox chat-messagebox-"
         +db.id + 
         "'><img class='chat-userpicture' id='chat-userpicture-"
         +db.id+
         "' src = '"+db.picture+ "'>"  + db.username + " : " + db.message + " --- " + db.time + "</div>" ;
        return rendered;
    }

    let properties = {
        id: "string",
        message: "string",
        picture: "string",
        username: "string",
        time: "string"
    }
    let db = {
        id: id,
        message: "",
        picture: "",
        username: "",
        time: ""
    }
}




