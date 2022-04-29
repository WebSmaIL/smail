// Радио кнопки
const radioBTNS = document.querySelectorAll('.about__radio');

// Массив с анимированными блоками информации
const informationArr = [document.querySelector('.about__information'),
                        document.querySelector('.about__textBlock')];

// Массив с анимированными блоками навыков
const skillsArr = [document.querySelector('.about__mySkills'),
                    document.querySelectorAll('.about__cardLogo'),
                    document.querySelectorAll('.about__cardLine')];



if (radioBTNS[0].checked) {

    skillsArr.forEach(element => {
        if (element instanceof NodeList) {
            element.forEach(secEl => {
                secEl.classList.remove('active');
            })
        } else {
            element.classList.remove('active');
        }
    });

    informationArr.forEach(element => {
        element.classList.add('active');
    });

}

radioBTNS.forEach(element => {
  element.addEventListener("change", (e) => {
    if (element.id == "skills") {

        skillsArr.forEach(element => {
            if (element instanceof NodeList) {
                let num = 100;
                for (let i = 0; i < element.length; i++) {
                    setTimeout(() => {
                        element[i].classList.add('active');
                    }, num);
                    num += 100;
                }
            } else {
                element.classList.add('active');
            }
        });

        informationArr.forEach(element => {
            element.classList.remove('active');
        });


    } else {

        skillsArr.forEach(element => {
            if (element instanceof NodeList) {
                element.forEach(secEl => {
                    secEl.classList.remove('active');
                })
            } else {
                element.classList.remove('active');
            }
        });
    

        informationArr.forEach(element => {
            element.classList.add('active');
        });
    }
  });
});
