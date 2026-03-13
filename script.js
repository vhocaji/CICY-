function moveNoButton() {
    if (isNoInsideRow()) {
        buttonRow.removeChild(noBtn);
        container.appendChild(noBtn);
        noBtn.classList.add('moved');
        noBtn.style.position = 'absolute';
    }

    noBtn.style.position = 'absolute';
    noBtn.classList.add('moved');

    const containerRect = container.getBoundingClientRect();
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // More dynamic movement - button flees to corners!
    const corners = [
        [10, 10], // top-left
        [containerRect.width - btnWidth - 10, 10], // top-right
        [10, containerRect.height - btnHeight - 10], // bottom-left
        [containerRect.width - btnWidth - 10, containerRect.height - btnHeight - 10] // bottom-right
    ];
    
    // Pick a random corner
    const randomCorner = corners[Math.floor(Math.random() * corners.length)];
    let randomX = randomCorner[0];
    let randomY = randomCorner[1];

    // Add a little randomness to corner positions
    randomX += Math.floor(Math.random() * 20) - 10;
    randomY += Math.floor(Math.random() * 20) - 10;

    // Ensure within bounds
    randomX = Math.max(5, Math.min(randomX, containerRect.width - btnWidth - 5));
    randomY = Math.max(5, Math.min(randomY, containerRect.height - btnHeight - 5));

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.right = 'auto';
    noBtn.style.bottom = 'auto';
    noBtn.style.maxWidth = 'min(140px, 30vw)';
    
    // Add a little "nope" animation
    noBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        noBtn.style.transform = 'scale(1)';
    }, 100);
}