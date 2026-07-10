const app = document.getElementById('app');
const TU_TELEFONO = "5215512345678"; 

// Función para abrir la imagen con efecto magenta
function abrirImagen(src, articleElement) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    
    if (articleElement) {
        articleElement.classList.add('card-hover-magenta');
    }
    
    modalImg.src = src;
    modal.style.display = 'flex';
    
    modal.onclick = function() {
        this.style.display = 'none';
        if (articleElement) {
            articleElement.classList.remove('card-hover-magenta');
        }
    };
}

// Función para contactar por WhatsApp (HTTPS corregido)
function contactar(producto) {
    const url = "https://wa.me/" + TU_TELEFONO + "?text=" + encodeURIComponent("Hola, quiero: " + producto);
    window.open(url, '_blank');
}

// Renderizado de productos
if (typeof productos !== 'undefined') {
    app.innerHTML = productos.map(p => `
        <article class="card">
            <img src="${p.img}" onclick="abrirImagen('${p.img}', this.parentElement)">
            <div class="info">
                <h3>${p.nombre}</h3>
                <p>${p.desc}</p>
                <strong class="precio">${p.precio}</strong>
                <button class="btn-comprar" onclick="contactar('${p.nombre}')">ADQUIRIR</button>
            </div>
        </article>
    `).join('');
}


