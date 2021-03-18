/* Load all blogs and associated links */

var BlogJsonData=null
var whilLoop=0

$.getJSON("/kgsensei/blogData/main.json", function(json) {
     BlogJsonData=json
});

whilLoop=BlogJsonData.length;
for(count=0;count<whilLoop;count++) {
     document.getElementById("blogs").innerHTML=document.getElementById("blogs").innerHTML+"<li>"+count+"</li>";
}
