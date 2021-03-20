/* Load all blog content and associated links */

var BlogJsonData;
var whilLoop;
const urlParams=new URLSearchParams(queryString);
const blogId=urlParams.get('id');

function LoadBlogContent() {
     localStorage.clear()
     $.getJSON("/kgsensei/blogData/main.json", function(json) {
          BlogJsonData=json
          BlogJsonData=JSON.parse(JSON.stringify(BlogJsonData))
          document.getElementById("blogs").innerHTML=""
          BlogJsonData.forEach((item) => {
               if(item.link == blogId) {
                    document.getElementById("blogTitleInsertData").innerHTML=item.title
                    document.getElementById("blogSubTitleInsertData").innerHTML=item.subtitle
                    document.getElementById("blogContentInsertData").innerHTML=item.text
               }
          });
     });
}
