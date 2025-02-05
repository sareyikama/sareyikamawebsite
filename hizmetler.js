document.addEventListener('DOMContentLoaded', () => {
  const servicePrices = {
    'Koltuk Yıkama': 100,
    'Araç Koltuk Yıkama': 150,
    'Araç Alt Döşeme Yıkama': 120,
    'Araç Tavan Yıkama': 80,
    'Araç Motor Yıkama': 200,
    'Pasta Cila': 250,
    'Boya Koruma': 300,
    'Seramik Kaplama': 350,
    'Far Parlatma': 90,
    'Ev Temizliği': 500,
    'Cam Temizliği': 50,
    'Leke Temizleme': 80,
    'Kaba İnşaat Temizleme': 600
  };

  // Hizmet isimleri ile quantity inputlarının name ve id değerleri arasındaki eşleme
  const quantityFieldMap = {
    'Koltuk Yıkama': 'quantityKoltuk',
    'Araç Koltuk Yıkama': 'quantityAracKoltuk',
    'Araç Alt Döşeme Yıkama': 'quantityAracAltDoseme',
    'Araç Tavan Yıkama': 'quantityAracTavan',
    'Araç Motor Yıkama': 'quantityAracMotor',
    'Pasta Cila': 'quantityPastaCila',
    'Boya Koruma': 'quantityBoyaKoruma',
    'Seramik Kaplama': 'quantitySeramikKaplama',
    'Far Parlatma': 'quantityFarParlatma',
    'Ev Temizliği': 'quantityEvTemizligi',
    'Cam Temizliği': 'quantityCamTemizligi',
    'Leke Temizleme': 'quantityLekeTemizleme',
    'Kaba İnşaat Temizleme': 'quantityKabaInsaatTemizleme'
  };

  const serviceForm = document.getElementById('serviceForm');
  const totalPriceElement = document.getElementById('totalPrice');

  // Toplam fiyatı güncelleyen fonksiyon
  function updatePrice() {
    let totalPrice = 0;
    const selectedServices = serviceForm.querySelectorAll('input[type="checkbox"]:checked');

    selectedServices.forEach(service => {
      const serviceName = service.value;
      const quantityFieldName = quantityFieldMap[serviceName];
      const quantityInput = document.querySelector(`[name="${quantityFieldName}"]`);
      const quantity = quantityInput ? parseInt(quantityInput.value, 10) : 1;
      totalPrice += servicePrices[serviceName] * quantity;
    });

    totalPriceElement.textContent = `₺${totalPrice}`;
  }

  // Checkbox ve adet input değişimlerini dinleyen event delegation
  serviceForm.addEventListener('change', (event) => {
    // Eğer checkbox ise ilgili quantity container'ı göster/gizle
    if (event.target.type === 'checkbox') {
      const serviceName = event.target.value;
      const quantityFieldId = quantityFieldMap[serviceName];
      const quantityContainer = document.getElementById(quantityFieldId);

      if (event.target.checked) {
        quantityContainer.style.display = 'block';
      } else {
        quantityContainer.style.display = 'none';
      }
      updatePrice();
    }
    // Eğer adet (number) input ise, fiyatı güncelle
    if (event.target.type === 'number') {
      updatePrice();
    }
  });

  // Daha anlık güncelleme için adet inputlarında 'input' eventini de dinleyebilirsiniz
  serviceForm.addEventListener('input', (event) => {
    if (event.target.type === 'number') {
      updatePrice();
    }
  });

  // Form gönderiminde örnek alert
  serviceForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert(`Rezervasyon başarılı! Toplam Fiyat: ${totalPriceElement.textContent}`);
  });
});
