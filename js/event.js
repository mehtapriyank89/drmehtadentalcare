document.addEventListener('DOMContentLoaded', function () {
    const scrollSpyEle = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(scrollSpyEle, {
        scrollOffset: 70,
    });

    const sideNavEle = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sideNavEle);

    const carouselEle = document.querySelectorAll('.carousel');
    M.Carousel.init(carouselEle, {
        indicators: true
    });
});