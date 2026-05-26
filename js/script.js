document.addEventListener("DOMContentLoaded", function () {
  console.log("Site oficial de Mariê carregado com sucesso (2026).");

  // Fechar modal e simular inscrição após envio do formulário de newsletter
  const subscribeForm = document.getElementById("subscribeForm");
  if (subscribeForm) {
    subscribeForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const emailInput = document.getElementById("email");
      const email = emailInput ? emailInput.value.trim() : "";
      const subscribeModalEl = document.getElementById("subscribeModal");
      const subscribeModal =
        bootstrap.Modal.getInstance(subscribeModalEl) ||
        new bootstrap.Modal(subscribeModalEl);
      subscribeModal.hide();
      // Mensagem simples de confirmação (pode ser substituída por uma chamada AJAX)
      alert(
        email
          ? "Inscrição recebida: " + email
          : "Inscrição recebida. Obrigado!",
      );
      if (subscribeForm.reset) subscribeForm.reset();
    });
  }

  // Tratar envio do formulário de compra (simulação)
  const purchaseForm = document.getElementById("purchaseForm");
  if (purchaseForm) {
    purchaseForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("buyerName")?.value || "";
      const email = document.getElementById("buyerEmail")?.value || "";
      const setor = document.getElementById("setorSelect")?.value || "pista";
      const qty = parseInt(
        document.getElementById("quantity")?.value || "1",
        10,
      );

      const modalEl = document.getElementById("buyTicketModal");
      const modal =
        bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
      modal.hide();

      const setorLabel = setor === "vip" ? "Pista Premium VIP" : "Pista Comum";
      const price = setor === "vip" ? 160 : 80;
      const total = price * (isNaN(qty) ? 1 : qty);

      if (purchaseForm.reset) purchaseForm.reset();
    });
  }
});
