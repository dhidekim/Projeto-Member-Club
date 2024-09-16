// Obtém o modal
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalBtn");
const span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abre o modal
// btn.onclick = function () {
//   modal.style.display = "block";
// };

// Quando o usuário clicar no <span> (x), fecha o modal
span.onclick = function () {
  modal.style.display = "none";
};

// Quando o usuário clicar fora do modal, fecha o modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

export function openModal() {
  modal.style.display = "block";
}
