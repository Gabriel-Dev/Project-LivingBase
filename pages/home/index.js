import { render_buttons, render_no_post, render_posts } from "../../scripts/render.js";
import { go_top } from "../../scripts/footer.js";

const nav_buttons = document.querySelector(".nav_buttons")
const no_post = document.querySelector(".no_post")
const filter = localStorage.getItem("filter") || "Todos"
let page = 0

render_buttons()
go_top()

const observer = new IntersectionObserver(async entries =>{
const filter = localStorage.getItem("filter") || "Todos"
entries[0].isIntersecting && page < 3 && filter == "Todos" ? 
(page++, await render_posts(page)) : ""
page == 2 ? no_post.innerHTML = "" : ""
})
   
Array.from(nav_buttons.children).forEach(button =>{
if(!button.classList.contains("button_icon")){
button.addEventListener("click",async (event)=>{
localStorage.setItem("filter", button.innerText)
active_color()
page = 0
await render_posts(page)
button.innerText == "Todos" ? render_no_post() : no_post.innerHTML = ""
observer.observe(no_post) 
})
} else {
button.addEventListener("click",(event)=>{ 
button.classList.contains("right") ? nav_buttons.scrollLeft += 100
: nav_buttons.scrollLeft -= 100
})
}
})

function active_color(){
const filter = localStorage.getItem("filter")

Array.from(nav_buttons.children).forEach(button =>{
button.innerText == filter ? button.classList.add("button_primary") :
button.classList.remove("button_primary")
})
}

function active_filter(){
Array.from(nav_buttons.children).forEach(button =>{
button.innerText == filter ? button.click() : ""
})
}
active_filter()

