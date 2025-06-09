const slides = document.getElementById('slides');
const totalImages = slides.children.length / 2; // só conta as originais
let index = 0;

function showNextSlide() {
  const slideWidth = slides.querySelector('img').clientWidth;
  index++;
  if (index >= totalImages) {
    index = 0;
  }
  slides.style.transition = 'transform 0.5s ease-in-out';
  slides.style.transform = `translateX(${-slideWidth * index}px)`;
}

setInterval(showNextSlide, 2000);

// ----------------------------- player ------------------- //

const audio = document.getElementById('player');
const btn = document.getElementById('playPauseBtn');

// Tenta tocar a música ao carregar a página
window.addEventListener('load', () => {
  audio.muted = false;
  audio.play().then(() => {
    btn.textContent = '⏸️';
  }).catch(() => {
    console.log("Autoplay bloqueado, aguardando interação do usuário...");

    // Toca ao primeiro clique (apenas uma vez)
    document.addEventListener('click', () => {
      audio.play().then(() => {
        btn.textContent = '⏸️';
      });
    }, { once: true });
  });
});

// Botão de play/pause
btn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    btn.textContent = '⏸️';
  } else {
    audio.pause();
    btn.textContent = '▶️';
  }
});


// ----------------------------- chuva de cooracao------------------- //


function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '💖';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
  document.getElementById('heart-rain-container').appendChild(heart);

  // Remover o emoji do DOM após a animação
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Cria novos emojis de forma contínua
setInterval(createHeart, 300);




// ----------------------------- texto animacao ------------------- //



const startBtn = document.getElementById("startMessageBtn");
const typingContainer = document.getElementById("typing-text");

const fullText = `Nada que eu criar será tão bonito quanto o que sinto por você.\n
Mas mesmo assim, tentei fazer esse lugar ser um reflexo do que mora no meu coração.\n
Cada detalhe aqui foi pensado com você em mente.\n
Você é minha música favorita,\n
meu verso preferido,\n
e a parte mais linda da minha vida.`;

let i = 0;

function typeWriter() {
  if (i < fullText.length) {
    typingContainer.innerHTML += fullText.charAt(i) === "\n" ? "<br>" : fullText.charAt(i);
    i++;
    setTimeout(typeWriter, 40); // Velocidade de digitação
  }
}

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";         // Esconde o botão
  typingContainer.style.display = "block"; // Mostra o container
  typeWriter();                            // Inicia a digitação
});
