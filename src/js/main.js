import { random } from "./util";


window.onload = () => {
    
    //main code spread motion
    const mainSection = document.querySelector('.profile');
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    
    let codeArray = [':first-child',':hover',':focus',':nth-child', '&lt;div&gt;', '&lt;strong&gt;', '&lt;header&gt;', '&lt;dl&gt;', '&lt;span&gt;', '&lt;h1&gt;', '&lt;li&gt;', '&lt;p&gt;', '&lt;video&gt;', '&lt;figure&gt;', '&lt;ul&gt;', '&lt;ol&gt;', '&lt;nav&gt;', '&lt;article&gt;', '&lt;main&gt;', '&lt;a&gt;', 'flex-basis', 'text-overflow', 'display', 'font-size', 'background', 'object-fit', 'overflow']; 
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

    function motionSetting(){
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

    //paging
    const tabs = document.querySelectorAll('.tabs__menu');
    const tabsCont = document.querySelectorAll('.tabs__cont');
    let pageNum = 0;

    for(let i =0; i < tabs.length; i++){
        (function(idx) {
            tabs[idx].onclick = function() {
                pageNum = idx;
                tabSetting();
            }
        })(i);
    }

    // tabs.forEach(function(item, i){
    //     TweenMax.from(item, .4, {
    //         top:100,
    //         autoAlpha:0,
    //         ease: Power3.easenOut,
    //         delay:i * .1 + 1,
    //     })
    // })

    function tabSetting() {
        for(let i = 0; i < tabs.length; i++){
            if(pageNum === i) {
                tabs[pageNum].classList.add("active");
                tabsCont[pageNum].classList.add("active");
            }else{
                tabs[i].classList.remove("active");
                tabsCont[i].classList.remove("active");
            }
        }
    }

    window.addEventListener("resize", function() {
        resize();
    });

    function resize() {
        motionSetting();
    }

    resize();
}