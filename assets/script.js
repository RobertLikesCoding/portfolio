const navItems = document.querySelectorAll('.nav-link');
const arrows = document.querySelectorAll('.arrow');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(item => item.classList.remove('fw-bold'));
    item.classList.add('fw-bold');
  });
});

arrows.forEach(arrow => {
  arrow.addEventListener('click', () => {
    const targetSectionId = arrow.getAttribute('href').substring(1);
    const targetNavItem = document.querySelector(`a[href="#${targetSectionId}"]`);

    navItems.forEach(item => item.classList.remove('fw-bold'));
    targetNavItem.classList.add('fw-bold');
  });
});
