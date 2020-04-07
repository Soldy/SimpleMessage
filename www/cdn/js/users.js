const usersListClass = function () {
    this.add = function (properties) {
        if (typeof properties === "undefined")
            return false;

        lists[properties.id] = new userListClass(properties.id);
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
        
        document.getElementById('chatuserlist-users').innerHTML = render();
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
        out += '<div class="chatuserlist-box-peruser" id="chatuserlist-userbox-' + id + '">';
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

const userListClass = function (id) {
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
        rendered += '<div class="chat-user" id="chat-user-' + db.id + '">';
        rendered += '<div class="chatuserlist-username"> <p>' + db.name + '<span class="dot dot-'+db.status +'">' + db.messages + '</span></p> </div>';
        rendered += '<div class="chatuserlist-status"> ' + db.status + ' </div>';
        rendered += '<div class="chatuserlist-picture"><img src="' + db.picture + '"></div>' +
            '<div class="chatuserlist-messages"> ' + db.messages + ' </div>'
        rendered += '</div>';
        return rendered;
    }

    let properties = {
        id: "string",
        name: "string",
        status: "integer",
        picture: "string",
        messages: "integer" 
    }
    let db = {
        id: id,
        name: "",
        status: 0, // 0 = offline, 1 = online , 2 = dnd, 3 = away, 4 = bussy
        picture: "", // profile picture
        messages: 0
    }
}




