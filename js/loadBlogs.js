/* Load all blogs and associated links */

fetch("/kgsensei/blogData/main.json")
     .then(response => response.json())
     .then(json => {
          console.log(json.blogs[0]);
});

obj=JSON.parse(json);
whilLoop=obj["blogs"].length;
for(count=0;count<whilLoop;count++) {
     document.getElementById("blogs").innerHTML=document.getElementById("blogs").innerHTML+"<li>"+count+"</li>";
}
