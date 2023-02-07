const filters = ["Todos", "Segurança","Decoração","Organização","Aromas","Reforma","Limpeza","Pintura","Saúde"]

import { request_posts, request_all_posts } from "../../scripts/api.js";

const post_list = document.querySelector(".post_list")
const all_posts = await request_all_posts()

export async function render_posts(page){
let posts = await request_posts(page)
const filter = localStorage.getItem("filter") || "Todos"

page == 0 ? post_list.innerHTML = "" : ""
filter !== "Todos" ? posts = all_posts.filter(({category}) => category == filter) : ""

posts.forEach(({id, title, description, content, category, image}) => {
post_list.insertAdjacentHTML("beforeend",`
<li id="${category}" class="post">
<span>  
<img src="${image}" alt="${title}">
</span>
<h3>${title}</h3>
<p>${description}</p>
<p id="${id}"class="link">Acessar conteúdo</p>
</li>`)
});
    
post_list.addEventListener("click",(event)=>{
event.target.classList.contains("link") ? 
(localStorage.setItem("post_id",event.target.id),
window.location.href = "/pages/post/index.html") : ""
})
}

export function render_buttons(){
const nav_buttons = document.querySelector(".nav_buttons")

filters.forEach(category =>{
nav_buttons.insertAdjacentHTML("beforeend",`
<button class="button_default">${category}</button>`)
})

}

export function render_no_post(){
const no_post = document.querySelector(".no_post")

no_post.insertAdjacentHTML("beforeend", `
<span class="post"><img src="/assets/img/rectangles.png" alt="rectangles"></span>
<span class="post"><img src="/assets/img/rectangles.png" alt="rectangles"></span>
`)
}
