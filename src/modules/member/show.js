export function memberShow({ dataMember }) {
  try {
    console.log(dataMember);

    if (dataMember) {
      const client = dataMember[0];

      const modal = document.getElementById("myModal");
      const dataClient = document.querySelector("#data-client");
      const dataPhoto = document.querySelector("#data-photo");
      const clientId = document.querySelector("#client-id");
      const appointmentHistoryList = document.querySelector(
        "#appointment-history ul"
      );
      const totalCuts = document.getElementById("total-cuts");
      const cutsRemaining = document.querySelector(".cuts-remaining h2 span");
      const count = document.querySelector(".cuts-remaining .count");
      const progressText = document.querySelector(".progress span");
      const progressBar = document.querySelector(".progress-bar");
      const loyaltyCardList = document.querySelector(".loyalty-card ul");

      const photo = document.createElement("img");
      const name = document.createElement("h1");
      const clientSince = document.createElement("p");

      const clientCutsNeeded = client.loyaltyCard.cutsNeeded;
      const clientTotalCuts = client.loyaltyCard.totalCuts;

      const present = document.querySelector(".present img");

      // Limpa
      dataClient.innerHTML = "";
      dataPhoto.innerHTML = "";
      appointmentHistoryList.innerHTML = "";
      loyaltyCardList.innerHTML = "";
      //Dados do Cliente
      photo.setAttribute("src", `./src/assets/${client.id}.png`);
      photo.setAttribute("alt", client.name);
      name.textContent = client.name;
      clientSince.textContent = `Cliente desde ${client.clientSince}`;
      clientId.textContent = `ID: ${client.id}`;

      dataPhoto.append(photo);
      dataClient.append(name, clientSince);

      //Histórico de corte
      client.appointmentHistory.forEach((appointment) => {
        const item = document.createElement("li");
        const date = document.createElement("strong");
        const time = document.createElement("span");

        date.textContent = appointment.date;
        time.textContent = appointment.time;

        item.append(date, time);
        appointmentHistoryList.appendChild(item);
      });

      //Total de cortes
      totalCuts.textContent = `${clientTotalCuts} cortes`;

      //Cortes restantes
      cutsRemaining.textContent = client.loyaltyCard.cutsRemaining;

      //corte restante de um total de
      count.textContent = `${clientTotalCuts} de ${clientCutsNeeded}`;

      //Barra de progresso
      progressBar.style.width = `${clientTotalCuts * 10}%`;
      progressBar.setAttribute("aria-valuenow", `${clientTotalCuts * 10}`);
      progressText.textContent = `${clientTotalCuts * 10}% Completo`;

      //Cartão Fidelidade
      for (let i = 0; i < clientCutsNeeded; i++) {
        const item = document.createElement("li");

        if (i < clientTotalCuts) {
          item.classList.add("done");
          item.setAttribute("title", "OK");
          item.innerHTML = "<span>Ok</span>";
        } else if (i == clientCutsNeeded - 1) {
          item.classList.add("free");
          item.classList.add("shake");
          item.innerHTML = "<span>Grátis</span>";
        } else {
          item.innerHTML = "<span>Vazio</span>";
        }

        if (clientCutsNeeded == clientTotalCuts) {
          //Abre o modal
          modal.style.display = "block";
          present.addEventListener("click", () => {
            modal.style.display = "block";
          });
          present.classList.add("shake");
        }

        loyaltyCardList.appendChild(item);
      }
      document.querySelector(".board-client").classList.remove("hide");
    } else {
      document.querySelector(".board-client").classList.add("hide");
    }
  } catch (error) {
    alert("Não foi possível exibir os dados do membro");
    console.error(error);
  }
}
