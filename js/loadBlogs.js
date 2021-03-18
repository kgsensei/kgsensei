/* Load all blogs and associated links */

$.getJSON("/kgsensei/blogData/main.json", function(json) {
     console.log(json);
});

/*
whilLoop=blogPosts.length;
for(count=0;count<whilLoop;count++) {
     document.getElementById("blogs").innerHTML=document.getElementById("blogs").innerHTML+"<li>"+count+"</li>";
}
*/
