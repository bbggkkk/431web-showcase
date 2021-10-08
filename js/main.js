(function(){
    const bodys = document.querySelectorAll('[data-scroll-transition]');
    [...bodys].forEach(item => { new ScrollBody(item); } );
})();