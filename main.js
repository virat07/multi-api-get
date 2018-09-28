document.getElementById('mySearch').addEventListener('keyup', loadUsers);
function loadUsers() {
    var api = 'https://rest.bandsintown.com/artists/';
    var band = document.getElementById('mySearch').value;
    var key = '?app_id="bharat"';
    var URL = api+band+key;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', URL, true);
    xhr.onload = function () {
        if (this.status == 200) {
            var users = JSON.parse(this.responseText);
            var output = ' ';
            output += '<div>' + '<img src="' + users.thumb_url + '">' +
                '<ul>' +
                '<li class="name"> ' + users.name +' ' +'<span >'+ '<a id="link" class = "fa fa-facebook" target="_blank" href='+users.facebook_page_url+'>'+'</a>'+'</span>'+'</li>' +
                
                '<li class="tracker">' + users.tracker_count +' Trackers'+ '</li>' +
                '</ul>' +
                '</div>';

            document.getElementById('artists').innerHTML = output;
            
        }
       
    }
    xhr.send();
    loadevents();
}
function loadevents(){
    var api = 'https://rest.bandsintown.com/artists/';
    var band = document.getElementById('mySearch').value;   
    var key2 = '/events?app_id="bharat"';
    var URL_EVENTS = api + band + key2;
    var xhr2 = new XMLHttpRequest();
    xhr2.open('GET',URL_EVENTS,true);
    xhr2.onload = function(){
        var user = JSON.parse(this.responseText);
        var out = ' ';
        for(i in user){
        out += '<table>'+'<td>'+user[i].venue.city+'</td>'+'<td>'+user[i].venue.country+'</td>'+' '+'<td>'+user[i].venue.name+'</td>'+' '+ '</table>';
    
        }
    document.getElementById('upcomingevents').innerHTML = out;

        
    }
    xhr2.send();    
}