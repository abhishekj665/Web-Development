// Start the journey
// Start the journey
function startJourney() {
  document.getElementById("welcome").classList.add("hidden");
  document.getElementById("memory").classList.remove("hidden");
}

// Go to proposal section
function goToProposal() {
  document.getElementById("memory").classList.add("hidden");
  document.getElementById("proposal").classList.remove("hidden");
}

// Accept the proposal
function acceptProposal() {
  document.getElementById("proposal").classList.add("hidden");
  startCelebration();
}

// Start confetti and celebration
function startCelebration() {
  document.getElementById("celebration").classList.remove("hidden");
  const canvas = document.getElementById("confetti");
  const context = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confetti = Array.from({ length: 200 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    speedX: Math.random() * 2 - 1,
    speedY: Math.random() * 2 + 3,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`
  }));

  function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      if (p.y > canvas.height) p.y = 0; // Loop particles
      context.fillStyle = p.color;
      context.beginPath();
      context.arc(p.x, p.y, 4, 0, Math.PI * 2);
      context.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
}
