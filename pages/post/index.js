import { request_post_id } from "../../scripts/api.js"
import { go_top } from "../../scripts/footer.js"
import { render_buttons } from "../../scripts/render.js"

const home = document.querySelector(".home")
const main = document.querySelector("main")

home.addEventListener("click",(event)=>{
window.location.href = "/pages/home/index.html"
})

async function render_post(){
const post_id = localStorage.getItem("post_id") || ""
const post = await request_post_id(post_id)

const {id,title,description,content,category,image} = post
main.insertAdjacentHTML("beforeend",`
<section class="title_wrapper">
<div class="container"> 
<h1>${title}</h1>
<p>${description}</p> 
</div>
</section>
<section class="container content_wrapper">
<span>
<img src="${image}" alt="${title}">
</span>
<p>${content}</p>
<nav>
<div class="nav_buttons">
<button class="button_default button_icon right">
<img src="/assets/img/angle-right.png" alt="ângulo direito">
</button>
<button class="button_default button_icon left">
<img src="/assets/img/angle-right.png" alt="ângulo direito">
</button>
</div>
</nav>
</section>`)
}
await render_post()

render_buttons()

go_top()

const nav_buttons = document.querySelector(".nav_buttons")

Array.from(nav_buttons.children).forEach(button =>{
if(!button.classList.contains("button_icon")){
button.addEventListener("click", (event)=>{
button.classList.add("button_primary")
localStorage.setItem("filter", button.innerText)
window.location.href = "/pages/home/index.html"
})
} else {
button.addEventListener("click",(event)=>{
button.classList.contains("right") ? nav_buttons.scrollLeft += 100
: nav_buttons.scrollLeft -= 100})
}
})

