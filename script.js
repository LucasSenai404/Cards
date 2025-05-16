function troca() {
  Swal.fire({
    title: "Informações sobre a Mitose",
    text: "A mitose é um processo de divisão celular que resulta em duas células-filhas geneticamente idênticas.",
    icon: "info",
    confirmButtonText: "Entendi!"
  });
}

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("is-flipped");
  });
});
