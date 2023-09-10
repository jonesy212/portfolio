// document.addEventListener('DOMContentLoaded', function() {
//     var slideButtons = document.querySelectorAll('.slide-button');
//     var slideContainers = document.querySelectorAll('.slide-container');
//     var slideBorders = document.querySelectorAll('.slide-border');
//     var slideHeaders = document.querySelectorAll('.slide-header');
//     var slideMenus = document.querySelectorAll('.slide-menu');
    
//     slideButtons.forEach(function(button) {
//       button.addEventListener('click', function() {
//         var direction = this.dataset.slideDirection;
//         var delay = this.dataset.slideDelay || 0;
    
//         slideElements(slideButtons, direction, delay);
//       });
//     });
  
//     // Example usage for slideContainers
//     slideElements(slideContainers, 'right', 0);
    
//     // Example usage for slideBorders
//     slideElements(slideBorders, 'left', 0);
    
//     // Example usage for slideHeaders
//     slideElements(slideHeaders, 'up', 0);
    
//     // Example usage for slideMenus
//     slideElements(slideMenus, 'down', 0);
//   });
  
//   function slideElements(elements, direction, delay) {
//     elements.forEach(function(element) {
//       applySlideAnimation(element, direction, delay);
//     });
//   }
  
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
  