var index = 0;
var profile_pics = [];

function get_user_from_url(){
    var site = document.URL;
    var id = "user=";
    var start = site.search(RegExp(id));
    var end = site.search(/&/) > 0 ? site.search(/&/) : site.length;
    var user = site.substring(start + id.length, end);
    if(document.getElementById("user")){
        document.getElementById("user").value = user;
    }
    return user;
}

function hash_user_name_into_pic(username){
    index = 0;
    for(var i = 0; i < user.length; i++){
        index += Number(user.charAt());
    }
    index %= profile_pics.length;
    document.getElementById("profile_pic").src = profile_pics[index];
}

function populate_home(){

}

function generate_profile_mini(){
    var node = document.getElementById("main_container");
    var profile_mini = document.createElement("DIV");
    var profile_mini_image_container = document.createElement("DIV");
    var profile_mini_image = document.createElement("IMG");
    var profile_mini_name_container = document.createElement("DIV");
    var profile_mini_name = document.createElement("H1");
    node.appendChild(profile_mini);
    profile_mini.appendChild(profile_mini_image_container);
    profile_mini_image_container.appendChild(profile_mini_image);
    profile_mini.appendChild(profile_mini_name_container);
    profile_mini_name_container.appendChild(profile_mini_name);
    profile_mini.className = "profile_mini";
    profile_mini_name.innerText = get_user_from_url();
}

function check_if_logged_in(){
    if(document.URL.search(/user/g) > 0){
        generate_profile_mini();
    }
}