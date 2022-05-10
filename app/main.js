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


     // ================== \\
    //  Портфолио карточки  \\
//  \\  ==================  //

const webCards = document.querySelector('.portfolio__cards');
const pfView = document.querySelector('.portfolio__view');

const webCard1 = [pfCard1, pfCardImg1];
const webCard2 = [pfCard2, pfCardImg2];
const webCard3 = [pfCard3, pfCardImg3];

const site1 = [webImg1, webTitle1, webText1];
const site2 = [webImg2, webTitle2, webText2];
const site3 = [webImg3, webTitle3, webText3];

webCards.addEventListener('click', (e) => {
    let target = e.target;

    if ((target.tagName == 'IMG' || target.tagName == 'A') && !target.classList.contains('active')) {
        console.log('da');
        if(!pfView.classList.contains('active')) {
            pfView.classList.add('active');
        }

        let nTar;
        if (webCard1.indexOf(target) != -1) {
            nTar = webCard1;

        } else if (webCard2.indexOf(target) != -1) {
            nTar = webCard2;

        } else {
            nTar = webCard3;
        }

        for (let i = 0; i < 2; i++) {
            if (nTar.indexOf(webCard1[i]) == -1) {
                webCard1[i].classList.remove('active');
            }
            if (nTar.indexOf(webCard2[i]) == -1) {
                webCard2[i].classList.remove('active');
            }
            if (nTar.indexOf(webCard3[i]) == -1) {
                webCard3[i].classList.remove('active');
            }
        }

        for (let i = 0; i < 3; i++) {
            if (site1[i].classList.contains('active')) {
                site1[i].classList.remove('active');
            };
            if (site2[i].classList.contains('active')) {
                site2[i].classList.remove('active');
            };
            if (site3[i].classList.contains('active')) {
                site3[i].classList.remove('active');
            };
        }

        switch (nTar) {
            case webCard1:
                site1.forEach(element => {
                    if (!element.classList.contains('active')) {
                        element.classList.add('active');
                    };
                    webLink.href = 'https://websmail.github.io/Money-Rain/';
                });
                break;
            
            case webCard2:
                site2.forEach(element => {
                    if (!element.classList.contains('active')) {
                        element.classList.add('active');
                    };
                });
                webLink.href = '#';
                break;

            case webCard3:
                site3.forEach(element => {
                    if (!element.classList.contains('active')) {
                        element.classList.add('active');
                    };
                });
                webLink.href = '#';
                break;
        
            default:
                break;
        }

        nTar.forEach (e => {
            e.classList.add('active')
        })
    }
})


// FLIP CONTACT

const contactWrapper = document.querySelector(".contact__wrapper")
const flipBtn = document.getElementById("flipBtn")

flipBtn.addEventListener("click", (e) => {
    contactWrapper.classList.toggle("flip");
    contactWrapper.classList.toggle("unFlip");
    flipBtn.classList.toggle("active");
    flipBtn.classList.toggle("inactive");
})

// burger

const burgerBtn = document.querySelector(".sidebar__burger"),
            nav = document.querySelector(".sidebar__nav"),
            logo = document.querySelector(".sidebar__logo"),
            sidebar = document.querySelector(".sidebar");

burgerBtn.addEventListener("click", (e) => {
    burgerBtn.classList.add("hidden");
    logo.classList.add("hidden");
    nav.classList.add("active");
});

nav.addEventListener("click", (e) => {
    if (nav.classList.contains("active")) {
        burgerBtn.classList.remove("hidden");
        logo.classList.remove("hidden");
        nav.classList.remove("active");
    }
});