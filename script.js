async function loadPhotos() {
    const response = await fetch('photos.json');
    const data = await response.json();
    const container = document.getElementById('container');

    data.photos.forEach((src) => {
        const img = document.createElement('img');
        img.src = src;
        container.appendChild(img);
        animateImage(img);
    });
}

function animateImage(img) {
    function moveImage() {
        const x = Math.random() * (window.innerWidth - img.width);
        const y = Math.random() * (window.innerHeight - img.height);

        img.style.transform = `translate(${x}px, ${y}px)`;
    }
    moveImage();
    setInterval(moveImage, 5000); // Перемещаем каждые 5 секунд
}

loadPhotos();
