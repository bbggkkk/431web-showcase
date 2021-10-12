(function(){
    const element = document.querySelectorAll('[data-scroll-animation]');
    for(let i=0; i<element.length; i++){
        element[i].scrollAnimation = new ScrollAnimation(element[i],window,element[i].getAttribute('data-scroll-animation'));
    }
    // [...bodys].forEach(item => { item.ScrollAnimation = new ScrollAnimation(item, window, item.getAttribute('data-scroll-animation')); } );
})();