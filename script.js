var arr = [
  {
    dp: "https://images.unsplash.com/photo-1604514628550-37477afdf4e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWxzfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWxzfGVufDB8fDB8fHww",
  },
  {
    dp: "https://media.istockphoto.com/id/521704838/photo/beautiful-girl-with-a-spectacular-make-up.jpg?s=2048x2048&w=is&k=20&c=zdsB5HBuemYA5XD4n6BnoucVlk8NNRtDp2iEN_5pSZY=",
    story:
      "https://images.unsplash.com/photo-1604514775346-3f40ef356d68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1604681630513-69474a4e253f?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1604681527661-41ab3a47b2c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1604436154692-5f99b849232c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1608477194635-63cd7d9c75bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1669607314566-0b3e589ec71d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1693685297721-9bd6e2bf4470?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
  },
];
var clutter="";
var storiya=document.querySelector(".storyia")
arr.forEach((elem,index) => {
 clutter += ` <div class="story">
          <img id=${index} src=${elem.dp} alt="">
        </div>`;
});
document.querySelector(".storyia").innerHTML=clutter;
storiya.addEventListener("click",function(dets){
  document.querySelector(".full-screen").style.display= "block";
  document.querySelector(".full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`;
  setTimeout(() => {
    document.querySelector(".full-screen").style.display="none";
  }, 1800);
  
})