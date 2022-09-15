// Global Variables

let sections = Array.from(document.getElementsByTagName('section'));
let titles = Array.from(document.getElementsByTagName('h2'));
const navList = document.getElementById('navbar__list');
const addSectionButton = document.getElementById('navbar__add');
const expandNavbarButton = document.getElementById('navbar__expand');
const scrollToTopButton = document.getElementById('scroll__to__top');

// Helper Functions

// checks if element is in viewport
function isInViewport(element) {
    const cords = element.getBoundingClientRect();
    return (
        cords.top >= 0 &&
        cords.left >= 0 &&
        cords.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        cords.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Main Functions

// creates nav bar dynamically
function createNavBar() {
    for (let i = 1; i <= sections.length; i++) {
        listItem = document.createElement('li');
        listItem.setAttribute('class', 'navbar__elements');
        listItem.innerHTML = `<a href='#section${i}' id='nav__section${i}'>Section ${i}</a>`;
        navList.appendChild(listItem);
    }
}

// adds active class to visible section 
function setActive() {
    sections.forEach(section => {
        let sectionParagraph = section.firstElementChild.firstElementChild.nextElementSibling;
        let sectionId = section.id;
        let navElement = document.getElementById(`nav__${sectionId}`).parentElement;

        isInViewport(sectionParagraph) ? 
        (section.classList.add('active'), navElement.classList.add('active')) :
        (section.classList.remove('active'), navElement.classList.remove('active'))
    })
}

// updates nav bar link text with corresponding section title
function updateNavText() {
    titles.forEach(title => {
        let sectionId = title.parentElement.parentElement.id;
        let navbarLink = document.getElementById(`nav__${sectionId}`);
        navbarLink.innerHTML = title.innerHTML;
    })
}

// creates new editable section
function createNewSection() {
    // creating elements
    let number = sections.length + 1;
	const content = document.querySelector('main');
    const newSection = document.createElement('section');
    const title = `<h2 contentEditable='true' id='title${number}'>Section ${number}</h2>`;
    const newListItem = document.createElement('li');
    
    // sets atrributes and fills content in new section
    newSection.setAttribute('id', `section${number}`);
    newSection.innerHTML = `<div class='landing__container'>
    ${title}
    <p contentEditable='true'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
    
    <p contentEditable='true'>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>`;
    content.appendChild(newSection);
    sections = Array.from(document.getElementsByTagName('section'));
    titles = Array.from(document.getElementsByTagName('h2'));
    
    // sets attributes and adds anchor link to new nav element
    newListItem.setAttribute('class', 'navbar__elements');
    newListItem.innerHTML = `<a href='#section${number}' id='nav__section${number}'>Section ${number}</a>`;
    navList.appendChild(newListItem);
}

// toggles collapsed class on nav bar and changes icon accordingly
function toggleCollapse() {
    navList.classList.toggle('collapsed');

    navList.classList.contains('collapsed') ? 
    expandNavbarButton.innerHTML = `<span class='material-symbols-outlined icon'> expand_more </span>` :
    expandNavbarButton.innerHTML = `<span class='material-symbols-outlined icon'> expand_less </span>`
}

// shows or hides scroll to top button according to scrolled position
function scrolled() {
    let position = window.scrollY;
    position < 500 ?
    scrollToTopButton.style.cssText = 'visibility: hidden; opacity: 0;' :
    scrollToTopButton.style.cssText = 'visibility: visible; opacity: 1;'
}

// Events

createNavBar();

document.addEventListener('scroll', setActive);

document.addEventListener('input', updateNavText);

addSectionButton.addEventListener('click', createNewSection);

expandNavbarButton.addEventListener('click', toggleCollapse);

window.addEventListener('scroll', scrolled);

scrollToTopButton.addEventListener('click', () => window.scrollTo(0,0));
