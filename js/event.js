document.addEventListener('DOMContentLoaded', function () {
    const elems = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(elems, {
        scrollOffset: 70,
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
});