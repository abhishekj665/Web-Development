// JavaScript for navigation and confetti effect
function startJourney() {
    document.getElementById("welcome").classList.add("hidden");
    document.getElementById("story").classList.remove("hidden");
  }
  
  function goToProposal() {
    document.getElementById("story").classList.add("hidden");
    document.getElementById("proposal").classList.remove("hidden");
  }
  
  function acceptProposal() {
    document.getElementById("proposal").classList.add("hidden");
    startConfetti();
  }
  
  // Confetti effect using canvas
  function startConfetti() {
    const canvas = document.getElementById("confetti");
    const context = canvas.getContext("2d");
    canvas.classList.remove("hidden");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    const confetti = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speedX: Math.random() * 2 - 1,
      speedY: Math.random() * 2 + 2,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`
    }));
  
    function update() {
      context.clearRect(0, 0, canvas.width, canvas.height);
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
  