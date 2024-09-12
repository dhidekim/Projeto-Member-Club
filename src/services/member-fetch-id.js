import { apiConfig } from "./api-config";

export async function memberFetchById({ cardId }) {
  try {
    //Faz a requisição.
    const response = await fetch(`${apiConfig.baseURL}/clients`);

    // Converte para JSON.
    const data = await response.json();

    // Filtra o membro selecionado.
    const cardNumber = data.filter((member) => {
      return member.id == cardId;
    });
    console.log(cardNumber);
    if (cardNumber.length < 1) {
      return alert("Membro inválido!");
    }

    return cardNumber;
  } catch (error) {
    console.error(error);
    alert("Não foi possível encontrar o id do cartão.");
  }
}
