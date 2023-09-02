
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
        <a class="btn sm:btn-sm md:btn-md" onclick="showCategoryVideo('${category.category_id}')">${category.category}</a>
        `;
        btn_container.appendChild(btn);
    }

}
const loadCategoryVideo = async(id) =>{

    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data = await res.json()
    const video = data.data;
    console.log(video);
    displayCategoryVideo(video);

}

const displayCategoryVideo = (videos) =>{
    const container = document.getElementById('showVideoContainer');
    container.textContent = '';
    console.log(videos.length);

    videos.forEach(video => {
        // console.log(phone);
        const div = document.createElement('div');
        div.innerHTML=`
        <div class="card h-[350px] card-compact bg-base-100 shadow-xl">
                <figure><img src="${video.thumbnail}" class="h-[200px]" alt="Shoes" /></figure>
                <div class="card-body flex flex-row ">
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
        // console.log(video.authors[0].verified);
        container.appendChild(div);
        // verify=document.getElementById('verify');
        // console.log(verify);
        // if(video.authors[0].verified===true){
        //     verify.classlist.remove('hidden');
        // }
        // else{
        //     //verify.setAttribute("display", "hidden")
        // }
        
        // container.appendChild(div);
        // list=document.getElementById('author_name');
        // div=document.createElement('div').innerHTML=`<i class="fa-solid fa-check"></i>`;
        // list.appendChild(div);
    });


    
    
}
const showCategoryVideo = (id) =>{
    loadCategoryVideo(id);
}
loadCategory();
loadCategoryVideo(1000);
