function get_user_name_from_url(){
    var site = document.URL;
    var id = "user=";
    var start = site.search(RegExp(id));
    var end = site.search(/&/);
    var user = site.substring(start + id.length, end);
}