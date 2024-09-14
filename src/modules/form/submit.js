import { loadMember } from "../member/load";

const form = document.querySelector("form");
const cardNumber = document.getElementById("cardNumber");

// Manipulando o input amount para receber card válido.
cardNumber.addEventListener("input", (e) => {
  // Remove caracteres não numéricos
  let value = e.target.value.replace(/\D/g, "");

  //Aplicação de máscara
  value = value.replace(/(\d{3})(\d)/, "$1-$2");
  value = value.replace(/(\d{3})(\d)/, "$1-$2");
  value = value.replace(/(\d{3})(\d)/, "$1-$2");
  e.target.value = value;
});

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    //Recuperando o nome do cliente.
    const cardId = cardNumber.value.trim();

    if (!cardId) {
      return alert("Informe o código do membro!");
    }

    //Recarrega o membro.
    await loadMember(cardId);
  } catch (error) {
    alert("Não foi possível realizar a busca.");
    console.error(error);
  }
};
