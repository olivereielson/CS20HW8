

var call = new XMLHttpRequest();
call.open("GET", "https://api.chucknorris.io/jokes/random", true);
call.send();
call.onreadystatechange=(e)=>{
    
    var json=JSON.parse(call.responseText);
    $("#AJAX").text(json["value"]);
}

fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => response.json())
    .then(function (data){
        $("#fetch").text(data["value"]);
    });



