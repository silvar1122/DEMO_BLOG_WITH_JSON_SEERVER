
const container=document.querySelector('.blogs');
const search_form=document.querySelector('.search');


const RenderPosts= async (term) => {
    let uri='http://localhost:4000/posts?_sort=title';
    if(term){
        uri+='&q='+term;
    }

    const res=await fetch(uri);
    const posts=await res.json();

   let template='';

   posts.forEach(post =>{
       template += '<div class="post"> <h2>' +post.title+'</h2>' +
       '<p><small>'+post.likes+ 'likes</small></p>'+ 
       '<p>'+post.body.slice(0,200)+'</p>'+ 
       '<a  href="details.html? id='+post.id+'">Read more.....</a> '+
       '</div>'
  

    // template +='<nav><h1>All blogs</h1> <a href="create.html">Add new Blog</a></nav>'

    })

    container.innerHTML=template;
}


search_form.addEventListener('submit',(e) =>{
    e.preventDefault();
    RenderPosts(search_form.term.value.trim());

})
window.addEventListener('DOMContentLoaded',() => RenderPosts());
