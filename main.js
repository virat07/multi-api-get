document.getElementById('mySearch').addEventListener('keyup', loadUsers);
function loadUsers() {
    var api = 'https://rest.bandsintown.com/artists/';
    var city = document.getElementById('mySearch').value;
    var key = '?app_id="bharat"';
    var URL = api+city+key;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', URL, true);
    xhr.onload = function () {
        if (this.status == 200) {
            var users = JSON.parse(this.responseText);
            var output = ' ';
            output += '<div class = "artist">' + '<img src="' + users.thumb_url + '">' +
                '<ul>' +
                '<li class="name"> ' + users.name +' ' +'<span >'+ '<a id="link" class = "fa fa-facebook" target="_blank" href='+users.facebook_page_url+'>'+'</a>'+'</span>'+'</li>' +
                
                '<li class="tracker">' + users.tracker_count +' Trackers'+ '</li>' +
                '</ul>' +
                '</div>';

            document.getElementById('artist').innerHTML = output;
            
        }
    }
    xhr.send();
    loadevents();
}
function loadevents(){
    var api = 'https://rest.bandsintown.com/artists/';
    var city = document.getElementById('mySearch').value;   
    var key2 = '/events?app_id="bharat"';
    var URL_EVENTS = api + city + key2;
    var xhr2 = new XMLHttpRequest();
    xhr2.open('GET',URL_EVENTS,true);
    xhr2.onload = function(){
        var user = JSON.parse(this.responseText);
        var out = ' ';
        for(i in user){
        out += '<div>'+' '+user[i].venue.country+','+user[i].venue.city+' '+user[i].venue.name+' ' + '</div>';
    
        }
    document.getElementById('upcomingevents').innerHTML = out;

        
    }
    xhr2.send();    
}