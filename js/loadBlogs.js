/* Load all blogs and associated links */

var BlogJsonData;
var whilLoop;

$.getJSON("/kgsensei/blogData/main.json", function(json) {
     BlogJsonData=json
     BlogJsonData=BlogJsonData.blogs
});

whilLoop=Object.keys(BlogJsonData).length;
for(count=0;count<whilLoop;count++) {
     document.getElementById("blogs").innerHTML=document.getElementById("blogs").innerHTML+"<li>"+count+"</li>";
}
