var index = 0;
var profile_pics = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png", "12.png", "13.png", "14.png", "15.png", "16.png"];
var lorem_ipsum_array = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis metus in auctor vehicula. Mauris et turpis at elit accumsan rutrum. Aenean ultricies ullamcorper ipsum sed rutrum. Praesent in scelerisque quam. Curabitur interdum at lectus congue dapibus. Duis eleifend ligula eu felis lobortis, eu posuere justo facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras et elit ut tellus facilisis feugiat non a dui. Morbi eu dictum sapien, in fermentum ante. Proin blandit, leo non ultrices ornare, nisl orci viverra lectus, nec maximus quam sem ut lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id tellus sapien. Pellentesque dui est, facilisis at porta non, mattis non orci. Praesent maximus, libero ac sagittis tempor, sem enim suscipit tellus, a mollis risus erat eu mauris. Sed eget ligula eget nunc blandit sollicitudin nec non mauris.".split(" ");
var random_name_array = ["relation", "calliope", "winkie", "poop", "peated", "trollfjorden", "potato", "finished", "allege", "cocktail", "apricaria", "weight", "shain", "form", "cameraman", "parkesia", "clew", "kura"];
var icon_path = "../assets/icons/"

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
    var ret = ""
    index = 0;
    for(var i = 0; i < username.length; i++){
        index += Number(username.charCodeAt(i));
    }
    index %= profile_pics.length;
    ret = icon_path + profile_pics[index];
    return ret;
}

function create_random_username(){
    var random_index = Math.floor(Math.random() * random_name_array.length);
    var random_number = Math.floor(Math.random() * 1000) + 1;
    var ret = random_name_array[random_index] + String(random_number);
    return ret;
}

function get_random_lorem(){
    var random_num1 = Math.floor(Math.random() * lorem_ipsum_array.length);
    var random_num2 = Math.floor(Math.random() * lorem_ipsum_array.length);
    var start = Math.min(random_num1, random_num2);
    var end = Math.max(random_num1, random_num2);
    var ret = lorem_ipsum_array[start];
    var limit = 0;
    for(var i = start + 1; i < end; i++){
        ret += (" " + lorem_ipsum_array[i]);
        if(limit == 10){
            break;
        }
        limit++;
    }
    return ret;
}

function create_new_post(){
    var user = create_random_username();
    var post_box = document.createElement("DIV");
    post_box.style = "height: 15%";
    var top_box = document.createElement("DIV");
    top_box.style = "display: flex";
    var poster_picture = document.createElement("IMG");
    poster_picture.src = hash_user_name_into_pic(user);
    var poster_name = document.createElement("H5");
    var post_container = document.createElement("DIV");
    var post = document.createElement("DIV");
    post.style = "max-height: 40px, overflow: hidden, text-overflow: ellipsis"
    post_box.appendChild(top_box);
    top_box.appendChild(poster_picture);
    top_box.appendChild(poster_name);
    poster_name.innerText = user;
    post_box.appendChild(post_container);
    post_container.appendChild(post);
    post.innerText = get_random_lorem();
    return post_box;
}

function populate_home(){
    var content_list = document.getElementById("content_list");
    for(var i = 0; i < 6; i++){
        content_list.appendChild(create_new_post());
    }
}

function get_user_profile_pic(){
    var username = get_user_from_url();
    document.getElementById("profile_pic").src = hash_user_name_into_pic(username);
}

function generate_profile_mini(){
    var node = document.getElementById("main_container");
    var profile_mini = document.createElement("DIV");
    var profile_mini_image_container = document.createElement("DIV");
    var profile_mini_image = document.createElement("IMG");
    profile_mini_image.id = "profile_pic";
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

function create_random_stats(){
    return Math.floor(Math.random() * 100);
}

function change_colors1(){
    document.getElementById("main_container").style.backgroundColor = "black";
}

function change_colors2(){
    document.getElementById("main_container").style.backgroundColor = "red";
}

function change_colors3(){
    document.getElementById("main_container").style.backgroundColor = "blue";
}