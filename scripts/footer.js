export function go_top(){
const go_top = document.querySelector(".go_top")

go_top.addEventListener("click",(event)=>{
window.scrollTo(0, 0);
})
}