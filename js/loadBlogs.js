/* Load all blogs and associated links */

fetch("/kgsensei/blogData/main.json")
     .then(response => response.json())
     .then(json => {
          alert(json)
          window.obj=JSON.parse(json);
});

whilLoop=window.obj["blogs"].length;
for(count=0;count<whilLoop;count++) {
     document.getElementById("blogs").innerHTML=document.getElementById("blogs").innerHTML+"<li>"+count+"</li>";
}
