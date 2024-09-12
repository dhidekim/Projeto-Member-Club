import { memberFetchById } from "../../services/member-fetch-id";
import { memberShow } from "./show.js";

export async function loadMember(cardId) {
  console.log("cardId", cardId);

  // Buscar na API o membro
  const dataMember = await memberFetchById({ cardId });

  //Exibe os dados do membro
  memberShow({ dataMember });
}
