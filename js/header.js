
const headernav = ["home", "about", "classes", "team", "contact"];
const linkebi = ["index.html", "about.html", "classes.html", "ourteam.html", "https://www.facebook.com/lursmanashvili8/"];

let navtext = "<ul>";

for(i=0; i<headernav.length; i++){
navtext += '<li><a href="' + linkebi[i] +'">' + headernav[i] + "</a ></li>";
};

navtext += '</ul>';
console.log(navtext);
document.getElementById('headernav').innerHTML = navtext;