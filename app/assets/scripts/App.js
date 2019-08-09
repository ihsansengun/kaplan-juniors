import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import SmoothScroll from './modules/SmoothScroll';

// import JqueryCycle from './modules/JqueryCycle';


var mobileMenu = new MobileMenu();

new RevealOnScroll($('.element'), '65%');
new SmoothScroll();

// var jqueryCycle = new JqueryCycle($('#testimonial'));

