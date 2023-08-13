
const sections  = document.querySelectorAll('section');
// console.log(sections);
for(const section of sections){
  section.style.border = '2px solid red';
  section.style.backgroundColor = 'lightgray';
  section.style.padding = '10px';
  section.style.marginBottom = '10px';
  section.style.borderRadius = '19px';
};

// const placesContainer  = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'black';

const placesContainer =  document.getElementById('places-container');
placesContainer.classList.add('text-center');
placesContainer.classList.add('font-size');
placesContainer.classList.remove('font-size');

