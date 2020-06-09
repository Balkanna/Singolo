// open burger-menu
document
    .querySelector('.header__burger')
    .addEventListener('click', (event) => {
    if(!event.target.classList.contains('header__burger-nav')) {
        event.currentTarget.classList.toggle('open');
    }
});

// slider
let slide = document.querySelectorAll('.slider__phone .phone__slide');
let currentSlide = 0;

function showSlider() {
    for (let i = 0; i < slide.length; i++) {
        slide[i].classList.add('hidden');

    }
    slide[currentSlide].classList.remove('hidden');

    if (currentSlide + 1 == slide.length) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
}
document.querySelector('.slider__button-prev').onclick = showSlider;
document.querySelector('.slider__button-next').onclick = showSlider;

function submitQuoteForm(event) {
    event.preventDefault();
    const elements = event.target.elements;
    const obj = {};
    for (var i = 0; i < elements.length; i++) {
      var item = elements.item(i);
      obj[item.name] = item.value;
    }
  
    // fake server to send forms data
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        response.json();
      })
      .then((json) => {
        console.log('response: ' + JSON.stringify(json));
      });
  
    alert('The form was submitted.');
  }
  
  document
    .getElementById('quote-form')
    .addEventListener('submit', submitQuoteForm,false);