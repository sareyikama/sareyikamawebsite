document.addEventListener('DOMContentLoaded', () => {
  // Örnek hizmet verisi
  const service = {
    name: "Örnek Hizmet",
    description: "Bu hizmet, müşterilerimize en kaliteli hizmeti sunmayı amaçlar. Aşağıdaki resim, hizmetin genel görünümünü temsil etmektedir.",
    imageUrl: "https://via.placeholder.com/350x200.png?text=Hizmet+Resmi"
  };

  // HTML elemanlarını seçiyoruz
  const imageEl = document.querySelector('.service-image');
  const titleEl = document.querySelector('.service-title');
  const descriptionEl = document.querySelector('.service-description');

  // Verileri ilgili elemanlara yerleştiriyoruz
  imageEl.src = service.imageUrl;
  titleEl.textContent = service.name;
  descriptionEl.textContent = service.description;
});
