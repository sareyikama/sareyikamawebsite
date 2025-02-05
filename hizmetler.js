// hizmetler.js
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
        'Kaba İnşaat Temizliği': 600
    };

    const serviceForm = document.getElementById('serviceForm');
    const totalPriceElement = document.getElementById('totalPrice');
    const quantityInputs = {};

    // Function to update price
    function updatePrice() {
        let totalPrice = 0;
        let quantity;

        const services = serviceForm.querySelectorAll('input[type="checkbox"]:checked');
        
        services.forEach(service => {
            const serviceName = service.value;
            quantity = document.querySelector(`[name=quantity${serviceName.replace(/ /g, '')}]`) ? document.querySelector(`[name=quantity${serviceName.replace(/ /g, '')}]`).value : 1;
            totalPrice += servicePrices[serviceName] * quantity;
        });

        totalPriceElement.textContent = `₺${totalPrice}`;
    }

    // Show quantity input when service is selected
    serviceForm.addEventListener('change', (event) => {
        if (event.target.type === 'checkbox') {
            const serviceName = event.target.value;
            const quantityContainer = document.getElementById(`quantity${serviceName.replace(/ /g, '')}`);
            
            if (event.target.checked) {
                quantityContainer.style.display = 'block';
            } else {
                quantityContainer.style.display = 'none';
            }

            updatePrice();
        }
    });

    // Submit form and log selected data (you can replace this with actual form submission logic)
    serviceForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert(`Rezervasyon başarılı! Toplam Fiyat: ${totalPriceElement.textContent}`);
    });
});
