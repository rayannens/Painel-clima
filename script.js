firstact = false;

function atualizarCards() {

    if (firstact == false) {

        const cards = document.getElementById('weather-info');
        cards.classList.add('weather-info-mostrar');
        firstact = true;
    }
    else {

        const card = document.querySelector('.weather-info');
        
        card.style.opacity = 0;
        card.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
          card.style.opacity = 1;
          card.style.transform = 'translateY(0)';
        }, 300);
    }
  }

