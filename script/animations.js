//creo una funzione secondo cui al click inizia a ruotare
const handRotate = () => {
  // a cosa devo applicarla in HTML
  // in questo caso ciò che ha classe box,flex,navy
  const navyBox = document.querySelector(".box.flex.navy");
  navyBox.classList.add("rotate"); //ho aggiunto la classe rotate che lo fa girare (creato in CSS)
};
// se il div contiene già rotate
// if (navyBox.classList.contain("rotate") {
// if (navyBox.style.animationPlayState === 'running') {}
// })
