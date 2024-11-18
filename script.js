async function loadPhotos() {
    const container = document.getElementById('container');
    
    for (let i = 0; i < 35; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        star.style.animationDuration = `${Math.random() * 2 + 2}s`;

        const starX = Math.random() * window.innerWidth;
        const starY = Math.random() * window.innerHeight;
        star.style.left = `${starX}px`;
        star.style.top = `${starY}px`;

        container.appendChild(star);
    }

    const response = await fetch('photos.json');
    const data = await response.json();

    Object.values(data).forEach((group_) => {
        const group = document.createElement('div');
        group.classList.add('group');

        const groupX = Math.random() * (window.innerWidth - 200);
        const groupY = Math.random() * (window.innerHeight - 200);

        group.style.left = `${groupX}px`;
        group.style.top = `${groupY}px`;

        for (let i = 0; i < 3; i++) {
            const borderDiv = document.createElement('div');
            borderDiv.classList.add('border');
            borderDiv.style.animationDuration = `${Math.random() * 15 + 25}s`;
            group.appendChild(borderDiv);
        }

        group_.forEach((src) => {
            const img = document.createElement('img');
            img.src = src;
            img.style.position = 'absolute';
            group.appendChild(img);

            animateImageInGroup(img);
        });

        container.appendChild(group);
    });
}

function animateImageInGroup(img) {
    const baseX = Math.random() * 150;
    const baseY = Math.random() * 150;

    let offsetX;
    let offsetY;

    function shakeImage() {
        if (Math.random() >= 0.5) {
            offsetX = Math.random() + 5;
        } else {
            offsetX = Math.random() + -5;
        }

        if (Math.random() >= 0.5) {
            offsetY = Math.random() + 5;
        } else {
            offsetY = Math.random() + -5;
        }

        img.style.transform = `translate(${baseX + offsetX}px, ${baseY + offsetY}px)`;
    }
    shakeImage();
    setInterval(shakeImage, 1000);
}

loadPhotos();
