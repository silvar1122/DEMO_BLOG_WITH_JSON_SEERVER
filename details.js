// const the_id=new URLSearchParams(window.location.search).get('id');
// console.log(the_id);

const details_container=document.querySelector('.details');
const delete_button=document.querySelector('.button');


const val=location.search.substring(7);
console.log(val);

const renderDetails= async () =>{
    const res= await fetch('http://localhost:4000/posts/'+val); 
    const post=await res.json();
    console.log(post);

    const template='<h1>'+post.title+'</h1>'+
    '<p>'+post.body+'</p>';

    details_container.innerHTML=template;
}

delete_button.addEventListener('click',
async(e) =>{
    const response= await fetch('http://localhost:4000/posts/'+val,{
        method:'DELETE'
    })

    window.location.replace('index.html')
}
)
window.addEventListener('DOMContentLoaded',() => renderDetails());