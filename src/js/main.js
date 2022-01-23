'use strict';

window.onload = () => {
    init();
}

function init() {
    codeSpreadMotion();
    topScrollControl();
    pageScrollControl();
    tabs();
    modalControl();


    //code spread motion at main section
    function codeSpreadMotion() {
        const mainSection = document.querySelector('.profile');
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;
        
        let codeArray = [':first-child',':hover',':focus',':nth-child', '&lt;div&gt;', '&lt;strong&gt;', '&lt;header&gt;', '&lt;dl&gt;', '&lt;span&gt;', '&lt;h1&gt;', '&lt;li&gt;', '&lt;p&gt;', '&lt;video&gt;', '&lt;figure&gt;', '&lt;ul&gt;', '&lt;ol&gt;', '&lt;nav&gt;', '&lt;article&gt;', '&lt;main&gt;', '&lt;a&gt;', 'flex-basis', 'text-overflow', 'display', 'font-size', 'background', 'object-fit', 'overflow', 'align-items','line-clamp', 'text-align', 'visibility', 'opacity', 'box-shadow', '&lt;strong&gt;', '&lt;aside&gt;', '&lt;small&gt;', '&lt;table&gt;',
        ':first-child',':hover',':focus',':nth-child', '&lt;div&gt;', '&lt;strong&gt;', '&lt;header&gt;', '&lt;dl&gt;', '&lt;span&gt;', '&lt;h1&gt;', '&lt;li&gt;', '&lt;p&gt;', '&lt;video&gt;', '&lt;figure&gt;', '&lt;ul&gt;', '&lt;ol&gt;', '&lt;nav&gt;', '&lt;article&gt;', '&lt;main&gt;', '&lt;a&gt;', 'flex-basis', 'text-overflow', 'display', 'font-size', 'background', 'object-fit', 'overflow', 'align-items','line-clamp', 'text-align', 'visibility', 'opacity', 'box-shadow', '&lt;strong&gt;', '&lt;aside&gt;', '&lt;small&gt;', '&lt;table&gt;']; 
        TweenMax.set(mainSection, {perspective: 400});
        
        codeArray.forEach(function(codeItem, i){
            const item = document.createElement("div");
            item.setAttribute("class", "front-item");
            item.style.top = '45%';
            item.style.left = '48%';
            item.innerHTML = codeItem;
            mainSection.appendChild(item);
        });
    
        const frontItem = document.querySelectorAll(".front-item");
    
        const motionSetting = () => {
            TweenMax.killTweensOf(frontItem);
    
            frontItem.forEach(function(item, i){
                TweenMax.to(item, 1, {
                    top : Math.random() * (windowHeight - 150) + 60,
                    left : Math.random() * (windowWidth - 80) + 20, 
                    rotation : Math.random() * (windowWidth - 50) + 20, 
                    autoAlpha :  "random(.1,1)",
                    scale : .5,
                    ease : Power4.easenOut, 
                    delay : "random(0,.5)",
                    color:"random(['#6266cd', '#ffd15c', '#42c9ad', '#eb495b'])",
                })
            })
        }

        motionSetting();
        
        window.addEventListener("resize", function() {
            motionSetting();
        });
    }


    //tabs
    function tabs() {
        let tabMenu = document.querySelectorAll('.tabs__menu');
        const tabClick = (e) => {
            let tabSelectorSelected = e.target;
            let tabContainer = tabSelectorSelected.closest('.tab');
            let tabs = tabContainer.querySelectorAll('.tabs__menu');
            let tabsCont = tabContainer.querySelectorAll('.tabs__cont');
            
            if(!tabSelectorSelected.classList.contains('active')) {
                tabs.forEach(function(tabSelected, i) {
                    if(tabSelectorSelected.getAttribute('data-id') === tabsCont[i].getAttribute('data-id')) {
                        tabSelected.classList.add("active");
                        tabsCont[i].classList.add("active");
                    } else {
                        tabSelected.classList.remove("active");
                        tabsCont[i].classList.remove("active");
                    }
                });
            }
        }

        tabMenu.forEach(function(tabMenu) {
            tabMenu.addEventListener('click', event => tabClick(event));
        });
    }


    //scroll to top
    function topScrollControl() {   
        const scrollBtn = document.querySelector('.btn-scroll');

        const detectScroll = () => {
            let scrollYValue = window.scrollY;

            if(scrollYValue > 100) {
                document.body.classList.add("on-scroll");
            } else {
                document.body.classList.remove("on-scroll");
            }
        }
        window.addEventListener('scroll', detectScroll);


        const goTop = () => {
            window.scrollTo({
                top:0,
                left:0,
                behavior:'smooth'
            });
        }
        scrollBtn.addEventListener('click', goTop);
    }

    //scroll to each section
    function pageScrollControl() {  
        const aboutSection = document.getElementById('about'); 
        const resumeSection = document.getElementById('resume'); 
        const worksSection = document.getElementById('works'); 
        const contactSection = document.getElementById('contact'); 
        
        const moveToSection = (sec) => {
            window.scrollTo({
                top:sec.offsetTop - 100,
                behavior:'smooth'
            });
        }

        document.getElementById('navAbout').addEventListener('click', event => moveToSection(aboutSection));
        document.getElementById('navResume').addEventListener('click', event => moveToSection(resumeSection));
        document.getElementById('navWorks').addEventListener('click', event => moveToSection(worksSection));
        document.getElementById('navContact').addEventListener('click', event => moveToSection(contactSection));

    }

    //modal
    function modalControl() {
        const dimmedLayer = document.querySelector('.dimmed-layer');
        const modalCloseBtn = document.querySelector('.modal .btn-close');

        const lottehotelCont = document.getElementById('modalLottehotel'); 
        const starbucksCont = document.getElementById('modalStarbucks'); 
        const samsungLionsCont = document.getElementById('modalSamsungFrm'); 
        const vocCont = document.getElementById('modalVoc'); 
        const kadoChatCont = document.getElementById('modalKadochat'); 
        const eyesurferCont = document.getElementById('modalEyesurfer'); 
        const myPortfolioCont = document.getElementById('modalMyportfolio'); 

        
        //모달 팝업 열기 조정
        const openModal = (cont) => {
            dimmedLayer.classList.add('opened');
            cont.style.display = 'block';
        }
        
        document.querySelector('.work__lottehotel .btn-yellow').addEventListener('click', event => openModal(lottehotelCont));
        // document.querySelector('.work__starbucks .btn-yellow').addEventListener('click', event => openModal(starbucksCont));
        // document.querySelector('.work__samsunglions .btn-yellow').addEventListener('click', event => openModal(samsungLionsCont));
        document.querySelector('.work__voc .btn-yellow').addEventListener('click', event => openModal(vocCont));
        // document.querySelector('.work__kadoChat .btn-yellow').addEventListener('click', event => openModal(kadoChatCont));
        // document.querySelector('.work__eyesurfer .btn-yellow').addEventListener('click', event => openModal(eyesurferCont));
        // document.querySelector('.work__myPortfolio .btn-yellow').addEventListener('click', event => openModal(myPortfolioCont));


        //모달 팝업 닫기 조정
        const closeModal = () => {
            dimmedLayer.classList.remove('opened');
        }
        
        modalCloseBtn.addEventListener('click', closeModal);
        
        dimmedLayer.addEventListener('mouseup', (e) => {
            e.target === dimmedLayer ? dimmedLayer.classList.remove('opened') : false;
        });
    }
}
