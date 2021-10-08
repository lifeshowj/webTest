// window.onload = function() {
//   setTimeout (function () {
//   scrollTo(0,0);
//   }, 100);
// }
// // header hover
// $('#gnb>li').on('mouseenter', function(){
//     $(this).children('a').css({ color: '#df6562' })
//     $(this).children('ul').show()
// }).on('mouseleave', function(){
//     $(this).children('a').css({ color: 'black' })
//     $(this).children('ul').hide()
// })

// // evnet slider
// let className;
// let classNum;

// let num;
// let n;
// let liLength = $(".eventList li").length;
// let state = 1;
// function nextSlider() {
//   if ( state == 1) {
//     state = 0;
//     className = $(".eventList li:eq(0)").attr('class')
//     classNum = className.substr(7, 1)
//     if (classNum == liLength) classNum = 0;
//     $("#numBtn a").removeClass('active')
//     $("#numBtn a:eq("+ classNum +")").addClass('active')

//     $(".eventList li:eq(1)").addClass('on')
//                              .css({ opacity: 0 })
//                              .animate({ opacity: 1 }, 1000, function() {
//                                $(".eventList").append($(".eventList li:eq(0)"))
//                                $(".eventList li:last").removeClass("on")
//                                state = 1;
//                              })
//    }
// }
// function prevSlider() {
//   if ( state == 1) {
//     state = 0;
//     className = $(".eventList li:last").attr('class')
//     classNum = className.substr(7, 1) - 1;
//     $("#numBtn a").removeClass('active')
//     $("#numBtn a:eq("+ classNum +")").addClass('active')
//     $(".eventList li:last").addClass('on')
//                            .css({ opacity: 0 })
//                            .animate({ opacity: 1 }, 1000, function() {
//                               $(".eventList").prepend($(this))
//                               $(".eventList li:eq(1)").removeClass('on')
//                               state = 1;
//                             })
//   }
// }
// $(".next").on('click', function() {
//   clearInterval(timer)
//   timer = setInterval(nextSlider, 4000)
//   nextSlider()
// })
// $(".prev").on('click', function() {
//   clearInterval(timer)
//   timer = setInterval(nextSlider, 4000)
//   prevSlider()
// })
// let timer = setInterval(nextSlider, 4000)
// $("#numBtn a").on('click', function (e) {
//   clearInterval(timer)
//   timer = setInterval(nextSlider, 4000)
//     if ( state == 1) {
//       state = 0;
//       if ( $(this).hasClass('active') ) {
//         state = 1;
//         return false;
//       }
//       else {
//         $("#numBtn a").removeClass('active')
//         $(this).addClass('active')
//         num = $(this).index() + 1;
//         n = num;
//         $(".eSlider" + num).addClass('on')
//                           .css({ opacity: 0 })
//                           .animate({ opacity: 1 }, 1000, function() {
//                             for ( i=0; i<liLength-1; i++ ) {
//                               n++;
//                               if ( n == liLength+1 ) n = 1;
//                               $(".eventList").append($(".eSlider" + n))
//                             }
//                             $(".eventList li").not($(this)).removeClass('on')
//                             state = 1;
//                           })
//         }
//         e.preventDefault()
//     }
// })
// // $(window).on('scroll', function(){
// //   $('.s_show').each(function(e){
// //       if ($(window).scrollTop() > $(this).position().top - 700) {
// //           $(this).not(':animated').animate({ opacity: 1 }, 500)
// //       }
// //       else {
// //           $(this).not(':animated').animate({ opacity : 0 }, 500)
// //       }
// //   })
// // })