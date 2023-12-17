const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach((header) => {
    header.addEventListener('click', () => {
        const accordionText = header.nextElementSibling;
        const openImage = header.querySelector('.open');
        const closeImage = header.querySelector('.close');

        accordionText.classList.toggle('show');
        openImage.classList.contains('hide') ? openImage.classList.remove('hide') : openImage.classList.toggle('hide');
        closeImage.classList.contains('hide') ? closeImage.classList.remove('hide') : closeImage.classList.toggle('hide');
    });
});
