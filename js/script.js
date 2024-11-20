
const rowElem = document.querySelector(".row")

const printPhotos = () =>{
    let cards ="";
    photos.forEach(curPhoto => {
        cards += `
        <div class="col-12 col-md-6 col-lg-4">
                    <div class="card p-3">
                        <img class="pin" src="./img/pin.svg" alt="">
                        <img src="${curPhoto.url}" alt${curPhoto.title}>
                        <p class="description pt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic</p>
                    </div>
                </div>
              `
    });
     rowElem.innerHTML = cards;
}

let photos = [];
for(i = 0; i < 6; i++){
axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6").then(resp => {
   photos = resp.data;
   printPhotos();
   
   
});
};