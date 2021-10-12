(function(){
    const element = document.querySelectorAll('[data-scroll-animation]');
    for(let i=0; i<element.length; i++){
        setTimeout(() => {
            element[i].scrollAnimation = new ScrollAnimation(element[i],window,element[i].getAttribute('data-scroll-animation'), element[i].getAttribute('data-scroll-start'), element[i].getAttribute('data-scroll-end'));
    
            element[i].removeAttribute('data-scroll-start');
            element[i].removeAttribute('data-scroll-end');
        },0);
    }
    // [...bodys].forEach(item => { item.ScrollAnimation = new ScrollAnimation(item, window, item.getAttribute('data-scroll-animation')); } );
})();