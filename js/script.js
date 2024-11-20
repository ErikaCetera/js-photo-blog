
const rowElem = document.querySelector(".row")
const overlayElem = document.querySelector(".overlay");
const modalElem = document.querySelector(".modal-img");
const btnClose = document.querySelector(".close")





const printPhotos = () => {
    let cards = "";
    photos.forEach(curPhoto => {
        cards += `
        <div class="col-12 col-md-6 col-lg-4">
                    <div class="card p-3 " data-photos-url = "${curPhoto.url}">
                        <img class="pin" src="./img/pin.svg" alt="">
                        <img src="${curPhoto.url}" alt${curPhoto.title}>
                        <p class="description pt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic</p>
                    </div>
                </div>
              `
    });
    rowElem.innerHTML = cards;
};




let modalContent = "";
const addClickListener = (photos) => {
    const cardsElem = document.querySelectorAll(".card");
    cardsElem.forEach(curCardElem => {
        curCardElem.addEventListener("click", () => {
            overlayElem.classList.remove("d-none");
            const modalUrl = curCardElem.dataset.photosUrl;
            modalContent += `
                  <img src="${modalUrl}" alt="">
                   `;
            
             modalElem.innerHTML = modalContent;

        });
    });
};




btnClose.addEventListener("click", () =>{
    overlayElem.classList.add("d-none");
    modalContent = "";

});



let photos = [];
for (i = 0; i < 6; i++) {
    axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6").then(resp => {
        photos = resp.data;
        printPhotos();
        addClickListener();

    });
};