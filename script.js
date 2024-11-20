function goToProposal() {
  document.getElementById("story").classList.add("hidden");
  document.getElementById("proposal").classList.remove("hidden");
}

// Accept the proposal
function acceptProposal() {
  document.getElementById("proposal").classList.add("hidden");
  startConfetti();
}

// Confetti effect using canvas and display image on the canvas
function startConfetti() {
  const canvas = document.getElementById("confetti");
  const context = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Load the image to be shown in the celebration
  const celebrationImage = new Image();
  celebrationImage.src = 'thankyou.jpg'; // Replace with your image URL or path
  celebrationImage.onload = function() {
    // Draw the image in the center of the canvas
    const imgWidth = 300; // Adjust the size as needed
    const imgHeight = 300; // Adjust the size as needed
    const imgX = (canvas.width - imgWidth) / 2;
    const imgY = (canvas.height - imgHeight) / 2;
    context.drawImage(celebrationImage, imgX, imgY, imgWidth, imgHeight);
  };

  // Confetti particles
  const confetti = Array.from({ length: 100 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    speedX: Math.random() * 2 - 1,
    speedY: Math.random() * 2 + 2,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`
  }));

  function update() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw the image again in case it is cleared
    if (celebrationImage.complete) {
      const imgWidth = 300; // Adjust the size as needed
      const imgHeight = 300; // Adjust the size as needed
      const imgX = (canvas.width - imgWidth) / 2;
      const imgY = (canvas.height - imgHeight) / 2;
      context.drawImage(celebrationImage, imgX, imgY, imgWidth, imgHeight);
    }

    // Draw confetti particles
    confetti.forEach(particle => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      if (particle.y > canvas.height) particle.y = 0;
      context.fillStyle = particle.color;
      context.beginPath();
      context.arc(particle.x, particle.y, 5, 0, 2 * Math.PI);
      context.fill();
    });
    
    requestAnimationFrame(update);
  }
  update();
}
