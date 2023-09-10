// document.addEventListener('DOMContentLoaded', function() {
//     var slideContainers = document.querySelectorAll('.slide-container');
//     var slideBorders = document.querySelectorAll('.slide-border');
//     var slideHeaders = document.querySelectorAll('.slide-header');
//     var slideMenus = document.querySelectorAll('.slide-menu');
  
//     function handleScroll() {
//       var windowHeight = window.innerHeight;
  
//       slideContainers.forEach(function(container) {
//         var rect = container.getBoundingClientRect();
//         var isVisible = rect.top < windowHeight && rect.bottom > 0;
  
//         if (isVisible) {
//           applySlideAnimation(container, 'right', 0);
//         }
//       });
  
//       slideBorders.forEach(function(border) {
//         var rect = border.getBoundingClientRect();
//         var isVisible = rect.top < windowHeight && rect.bottom > 0;
  
//         if (isVisible) {
//           applySlideAnimation(border, 'left', 0);
//         }
//       });
  
//       slideHeaders.forEach(function(header) {
//         var rect = header.getBoundingClientRect();
//         var isVisible = rect.top < windowHeight && rect.bottom > 0;
  
//         if (isVisible) {
//           applySlideAnimation(header, 'up', 0);
//         }
//       });
  
//       slideMenus.forEach(function(menu) {
//         var rect = menu.getBoundingClientRect();
//         var isVisible = rect.top < windowHeight && rect.bottom > 0;
  
//         if (isVisible) {
//           applySlideAnimation(menu, 'down', 0);
//         }
//       });
//     }
  
//     window.addEventListener('scroll', handleScroll);
  
//     // Call the handleScroll function once on page load to check if any elements are already in the visible range
//     handleScroll();
//   });
  
//   function applySlideAnimation(element, direction, delay) {
//     // Apply slide animation based on direction
//     if (direction === 'left') {
//       element.style.transform = 'translateX(-100%)';
//     } else if (direction === 'right') {
//       element.style.transform = 'translateX(100%)';
//     } else if (direction === 'up') {
//       element.style.transform = 'translateY(-100%)';
//     } else if (direction === 'down') {
//       element.style.transform = 'translateY(100%)';
//     }
  
//     element.style.opacity = '0';
//     element.style.transition = 'transform 1s, opacity 1s';
  
//     setTimeout(function() {
//       element.style.opacity = '1';
//       element.style.transform = 'translate(0)';
//     }, delay);
//   }
  