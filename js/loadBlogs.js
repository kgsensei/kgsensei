/* Load all blogs and associated links */

var BlogJsonData;
var whilLoop;

function LoadBlogs() {
     localStorage.clear()
     $.getJSON("/kgsensei/blogData/main.json", function(json) {
          BlogJsonData=json
          BlogJsonData=JSON.parse(JSON.stringify(BlogJsonData))
          document.getElementById("blogs").innerHTML=""
          BlogJsonData.forEach((item) => {
               document.getElementById("blogs").innerHTML=document.getElementById("blogs").innerHTML+"<li><a href='/kgsensei/blog/id.html?id="+item.link+"'>"+item.title+"</a></li>";
          });
     });
}
