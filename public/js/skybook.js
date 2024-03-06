
let submit = document.getElementById('submit');
let content = document.getElementById('content');
var imag = document.getElementById('pf');

let posts = [];



Show();





async function Show(){
    
await fetch("http://localhost:3000/posts"
,{method: "GET"}).then((response)=>
    response.json()
).then((data) => {
    for(let i=0; i<data.length; i++){
        posts.push(data[i].title);
    }
});
    let table = '';
    for(let i=0; i<posts.length; i++){
        table += `
        <div class="artical">
            <div class="userposted">
               <div class="userpostedimgname"> 
                <div class="user-img">
                <img src="${imag.src}" alt="">
            </div>
            <div class="user-info">
                <h3>tony</h3>
            </div></div>
                <div class="userpostedoption">
                    <i class="fas fa-close"></i>
                    <i class="fas fa-bars"></i>
                </div>
            </div>
            <p class="articalP">${posts[i]}</p>
            <img src="" alt="">
            <artical-nav>
                
                    <div><i class="fa-regular fa-thumbs-up"></i></div>
                    <div><i class="fas fa-comment"></i></div>
                    <div><i class="fas fa-share"></i></div>
                
            </artical-nav>

        </div>
        `;
    }
    document.getElementById('content').innerHTML = table;
}

function Search(x){
    let table= '';
    for(let i=0; i<posts.length; i++){
        if (posts[i].includes(x) == true){
            table += `
            <div class="artical">
            <div class="userposted">
               <div class="userpostedimgname"> 
                <div class="user-img">
                <img src="${imag.src}" alt="">
            </div>
            <div class="user-info">
                <h3>tony</h3>
            </div></div>
                <div class="userpostedoption">
                <button onclick="Delete(${i})"><i class="fas fa-close"></i></button>
                    <i class="fas fa-bars"></i>
                </div>
            </div>
            <p class="articalP">${posts[i]}</p>
            <img src="" alt="">
            <artical-nav>
                
                    <div><i class="fa-regular fa-thumbs-up"></i></div>
                    <div><i class="fas fa-comment"></i></div>
                    <div><i class="fas fa-share"></i></div>
                
            </artical-nav>

        </div>
        `;
        }else{
            Show();
        }
    }
    document.getElementById('content').innerHTML = table;
}

function Delete(i){
    posts.splice(i,1);
    localStorage.posts = JSON.stringify(posts);
    Show();
}


