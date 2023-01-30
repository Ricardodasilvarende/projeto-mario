const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkvideo = video.src;


function altenarModal() {
    modal.classList.toggle("aberto");
}


botaoTrailer.addEventListener("click",() => {
    altenarModal();
    video.setAttribute("src", linkvideo);
});


botaoFecharModal.addEventListener("clink", () => {
    altenarModal();
    video.setAttribute("src", "")
});

