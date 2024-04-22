// "use strict";

// const counterNum = document.querySelectorAll(".counter-num");
// console.log(counterNum);
// let speed = 20;
// // console.log(counterNum.innerText);

// counterNum.forEach((myCount) => {
//     let target_count = parseInt(myCount.dataset.num);
//     let init_count = 0;

//     const updateNumber = () => {
//         init_count += 1;
//         myCount.innerText = init_count + "+";

//         if (init_count < target_count) {
//             setTimeout(() => {
//                 updateNumber();
//             }, 12);
//         }
//     };
//     updateNumber();
// });

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener('click', () => {
    headerElem.classList.toggle('active');
})

// $(document).ready(function() {

//     var $grid = $('.project-wrap').isotope({});
//     $('.round').on('click', 'a', function() {
//         var filterValue = $(this).attr('data-filter');

//         $('.round a').removeClass('active')
//         $(this).addClass("active")
//         $grid.isotope({
//             filter: filterValue
//         });
//     });
// });

// textCounter()

// function textCounter() {
//     gsap.registerPlugin(ScrollTrigger);
//     gsap.from(".counter-num span", {
//         textContent: "0",
//         duration: 2,
//         ease: "power1.inOut",
//         modifiers: {
//             textContent: value => formatNumber(value, 0)
//         },
//         scrollTrigger: {
//             trigger: ".counter",
//             start: "top+=40% 80%",
//             toggleActions: "play none none reverse",
//         }
//     });

//     function formatNumber(value, decimals) {
//         let s = (+value).toLocaleString('en-US').split(".");
//         return decimals ? s[0] + "." + ((s[1] || "") + "00000000").substr(0, decimals) : s[0];
//     }
// }