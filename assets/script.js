const navItems = document.querySelectorAll('.nav-link');
const arrows = document.querySelectorAll('.arrow');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(i => {
      i.classList.remove('fw-bold');
      i.textContent = i.textContent.replace(/_$/, '');
    });

    item.classList.add('fw-bold');
    item.textContent += '_';
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

function toggleMenu() {
  const links = document.querySelector('.mobile-links');
  const icon = document.querySelector('.mobile-icon');
  const menu = document.querySelector('.mobile-menu');

  links.classList.toggle('open');
  icon.classList.toggle('open');
  menu.classList.toggle('open');
}
