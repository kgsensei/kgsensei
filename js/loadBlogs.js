/* Load all blogs and associated links */

var xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=function() {
     if(this.readyState==4 && this.status==200) {
          var blogPosts=JSON.parse(this.responseText);
          document.getElementById("blogs").innerHTML=blogPosts.blogs;
     }
};
xmlhttp.open("GET", "/kgsensei/blogData/main.json", true);
xmlhttp.send();

whilLoop=window.obj["blogs"].length;
for(count=0;count<whilLoop;count++) {
     document.getElementById("blogs").innerHTML=document.getElementById("blogs").innerHTML+"<li>"+count+"</li>";
}
