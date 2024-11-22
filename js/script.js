// DATI IMPUT
// Elementi prelevati dal DOM
const rowElem = document.querySelector(".row")
const overlayElem = document.querySelector(".overlay");
const modalElem = document.querySelector(".modal-img");
const btnClose = document.querySelector(".close")




// Dichiarazione della funzione che inserirà la card nell'html
const printPhotos = () => {
    // variabile per salvate le card
    let cards = "";
    // Itera attraverso l'array di foto
    photos.forEach(curPhoto => {
        // Aggiunge una card per ogni foto
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
    // Inserisce le card nell'elemento row
    rowElem.innerHTML = cards;
};



// Funzione per far apparire il modale al click della card
// variabile per salvare l'img del modale
let modalContent = "";
const addClickListener = (photos) => {
    // preleva tutte le card
    const cardsElem = document.querySelectorAll(".card");
    // Per ogni card cliccata
    cardsElem.forEach(curCardElem => {
        curCardElem.addEventListener("click", () => {
            // visualizza l'overlay
            overlayElem.classList.remove("d-none");
        // preleva l'url 
            const modalUrl = curCardElem.dataset.photosUrl;
             modalContent += `
                  <img src="${modalUrl}" alt="">
                   `;
            // inserisce immagine nel modale
             modalElem.innerHTML = modalContent;

        });
    });
};



// Al click del bottone chiusura del modale
btnClose.addEventListener("click", () =>{
    // l'overlay scompare
    overlayElem.classList.add("d-none");
    // svuota il contenuto del modale
    modalContent = "";

});


// Array per memorizzare le foto
let photos = [];
for (i = 0; i < 6; i++) {
    axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6").then(resp => {
        // Assegna i dati delle foto all'array photos
        photos = resp.data;
        // Invoca la funzione per stampare le foto
        printPhotos();
        // Invoca la funzione per aggiungere gli event listener
        addClickListener();

    });
};