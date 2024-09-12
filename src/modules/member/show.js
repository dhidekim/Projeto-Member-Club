export function memberShow({ dataMember }) {
  try {
    console.log(dataMember);
  } catch (error) {
    alert("Não foi possível exibir os dados do membro");
    console.error(error);
  }
}
