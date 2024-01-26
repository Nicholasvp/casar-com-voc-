document.addEventListener("DOMContentLoaded", function() {
    
    document.getElementById("whatsapp-btn").addEventListener("click", function() {
      // Abre o link do Whatsapp
      window.open("https://api.whatsapp.com/send?phone=+5584991791015", "_blank");
    });
  
    // Adiciona um evento de clique ao botão do Instagram
    document.getElementById("instagram-btn").addEventListener("click", function() {
      // Abre o link do Instagram
      window.open("https://www.instagram.com/casarcomvoce_/", "_blank");
    });
  });