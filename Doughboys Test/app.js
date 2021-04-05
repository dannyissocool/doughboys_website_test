const boxes = document.querySelectorAll('.box');
const nav = document.getElementById('nav')
const title = document.querySelector('#zoomcard h1')
const heroImg = document.querySelector('#zoomcard img')

//Movement Animation to happen
const card = document.querySelector("#zoomcard");
const container = document.querySelector("#zoomcontainer");


//Moving Animation Event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });

//Animate In
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //Popout
    title.style.transform = "translateZ(150px)";
    heroImg.style.transform = "translateZ(125px)";    
  });

//Animate Out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = "translateZ(0px)";
    heroImg.style.transform = "translateZ(0px)";
  });


////////////////////////////////////////////////////////
// Scroll Sticky Nav
window.addEventListener('scroll', fixNav);


function fixNav() {
  if(scrollY > nav.offsetHeight ){
    nav.classList.add('active'); 
  } else {
    nav.classList.remove('active'); 
  }
}

// Scroll Intersection Event
window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes(){
  const triggerBottom = window.innerHeight/ 5 * 3;

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;


    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  })
}