/* Load all blogs and associated links */

jsondata=require('/kgsensei/blogData/main.json');
obj=JSON.parse(jsondata);
whilLoop=obj["blogs"].length;
for(count=0;count<whilLoop;count++) {
     document.getElementById("blogHolder").innerHTML=document.getElementById("blogHolder").innerHTML+count;
}