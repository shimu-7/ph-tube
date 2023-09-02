let hour,remain,min;
// let array=[];
// console.log(array);

const loadCategory = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await res.json()
    const category = data.data
    // console.log(phones);
    displayCategory(category);
}

const displayCategory = (categories) => {
    const btn_container = document.getElementById('category');
    for (const category of categories) {
        const btn=document.createElement('a');
        btn.innerHTML=`
        <a  class="btn sm:btn-sm md:btn-md" onclick="showCategoryVideo('${category.category_id}')">${category.category}</a>
        `;
        btn_container.appendChild(btn);
    }

}
const loadCategoryVideo = async(id) =>{

    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data = await res.json()
    const video = data.data;
    // console.log(video);
    displayCategoryVideo(video);

}

// const sortView =()=>{
//     let sortedProducts = array.sort(
//         (p1, p2) => (p1.others.views < p2.others.views) ? 1 : (p1.others.views > p2.others.views) ? -1 : 0);
    
//     console.log(array);
//     displaySort(array);
//     // sortedProducts?.forEach(product => {console.log(product)});
// }
// const displaySort=(arrays)=>{
//     arrays?.forEach(product => {console.log(product)});
// }
const displayCategoryVideo = (videos) =>{
    
    if(videos.length===0){
        const container = document.getElementById('no_content')
        const div = document.createElement('div');
        div.innerHTML=`
        <div class="text-center grid-flow-col">
            <div class="card  bg-base-100 ">
                <figure class="px-10 pt-10">
                    <img src="./images/Icon.png" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Oops!! Sorry, There is no <br> content here</h2>
                </div>
            </div>
        </div>
        `;
        container.appendChild(div);
    }
    const container = document.getElementById('showVideoContainer');
    container.textContent = '';
    videos?.forEach(video => {
        // console.log(video);
        // array.push(video);
        const div = document.createElement('div');
        if(video.others.posted_date){
             hour=parseInt(video.others.posted_date/3600)
             remain = parseInt(video.others.posted_date/3600)
             min = parseInt(remain/60);
            // console.log(hour,min);
        }
        div.innerHTML=`
        <div class="card h-[300px] card-compact bg-base-100 ">
               <div style="position: relative;" class="h-[200px]">
                <figure style="position: relative;"><img src="${video.thumbnail}" class="h-[200px]" style="position: relative;" alt="Shoes" /></figure>
                ${video.others.posted_date?
                    `<span style="position: absolute;
                    bottom: 10px;
                    right: 5px;" class="  bg-black text-white px-1
                     mx-3">
                     ${hour}hours ${min}min ago
                    </span>
                    `
                    :""
                }
                 </div>
                
                <div class="card-body flex flex-row">
                    <div>
                    <div class="avatar">
                    <div class="w-[50px] h-[50px] rounded-full">
                      <img src="${video.authors[0].profile_picture}" />
                    </div>
                  </div>
                          
                    </div>
                    <div>
                        <h2 class="card-title">${video.title}</h2>
                        <p class="flex flex-row" id="author_name">${video.authors[0].profile_name}
                        <span class="flex-1">
                        
                        ${video?.authors[0]?.verified?
                           `<img id="verify" class="w-[20px] h-[20px] rounded-full" src="https://img.icons8.com/fluency/48/instagram-check-mark.png" alt="instagram-check-mark"/>`
                        :""
                        }
                        </span>
                        </p>
                        <p>${video.others.views} Views</p>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(div);
       
    });


    
    
}
const showCategoryVideo = (id) =>{
    // const a=document.getElementById("id'${id}' ");

    loadCategoryVideo(id);
}
loadCategory();
loadCategoryVideo(1000);
sortView();
console.log(array);
