const baseURL = "https://m2-api-living.herokuapp.com/news"

export async function request_posts(page = 0){
const request = await fetch(`${baseURL}?page=${page}`,{
method: "Get",
headers: {
"Content-Type": "application/json",
},
})
const reponse = await request.json()

return request.status == 200 ? reponse.news : 
console.log(reponse.message)
}

export async function request_post_id(id){
const request = await fetch(`${baseURL}/${id}`,{
method: "Get",
headers: {
"Content-Type": "application/json",
},
})
const reponse = await request.json()
        
return request.status == 200 ? reponse : 
console.log(reponse.message)
}

export async function request_all_posts(){
const page_0 = await request_posts()
const page_1 = await request_posts(1)
const page_2 = await request_posts(2)

return [...page_0,...page_1,...page_2]
}
