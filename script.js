function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const headerOffset = document.querySelector('.header').offsetHeight;
    const sectionTop = section.offsetTop - headerOffset;
    window.scrollTo({ top: sectionTop, behavior: 'smooth' });
}


