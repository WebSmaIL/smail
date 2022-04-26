radioBTNS = document.querySelectorAll('.about__radio');

radioBTNS.forEach(element => {
  element.addEventListener("change", (e) => {
    if (element.id == "skills") {
      document.querySelector('.about__information').classList.remove('active');
      document.querySelector('.about__mySkills').classList.add('active');
    } else {
      document.querySelector('.about__mySkills').classList.remove('active');
      document.querySelector('.about__information').classList.add('active');
    }
  });
});