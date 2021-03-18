/* Load all blogs and associated links */

fetch("/kgsensei/blogData/main.json")
     .then(response => response.json())
     .then(json => {
          window.obj=JSON.parse(json.blogs[0]);
});

whilLoop=window.obj["blogs"].length;
for(count=0;count<whilLoop;count++) {
     document.getElementById("blogs").innerHTML=document.getElementById("blogs").innerHTML+"<li>"+count+"</li>";
}
