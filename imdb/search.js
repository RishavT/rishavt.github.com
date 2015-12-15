var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    document.getElementById("response").innerHTML = xhttp.responseText;
  }
};
xhttp.open("GET","http://www.imdb.com/xml/find?json=1&nr=0&nm=on&q=batman",true);
xhttp.send();
