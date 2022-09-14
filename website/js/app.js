// Global Variables

let sections = Array.from(document.querySelectorAll('section'));
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
        let sectionId = section.id
        let navElement = document.getElementById(`nav__${sectionId}`).parentElement

        isInViewport(sectionParagraph) ? 
        (section.classList.add('active'), navElement.classList.add('active')):
        (section.classList.remove('active'), navElement.classList.remove('active'))
    })
}

// creates new editable section
function createNewSection() {
    // creating elements
	const content = document.querySelector('main');
    let newSection = document.createElement('section');
    let newListItem = document.createElement('li');
    let number = sections.length + 1;
    
    // sets atrributes and fills content in new section
    newSection.setAttribute('id', `section${number}`);
    newSection.setAttribute('contentEditable', 'true')
    newSection.innerHTML = `<div class='landing__container'>
    <h2>Section ${number}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
    
    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>`;
    content.appendChild(newSection);
    sections.push(newSection); 
    
    // sets attributes and adds anchor link to new nav element
    newListItem.setAttribute('class', 'navbar__elements');
    newListItem.innerHTML = `<a href='#section${number}' id='nav__section${number}'>Section ${number}</a>`;
    navList.appendChild(newListItem);
}

// toggles collapsed class on nav bar and changes icon accordingly
function toggleCollapse() {
    navList.classList.toggle('collapsed')

    navList.classList.contains('collapsed') ? 
    expandNavbarButton.innerHTML = `<span class='material-symbols-outlined icon'> expand_more </span>` :
    expandNavbarButton.innerHTML = `<span class='material-symbols-outlined icon'> expand_less </span>`
}

// shows or hides scroll to top button according to scrolled position
function scrolled() {
    let position = window.scrollY
    position < 500 ?
    scrollToTopButton.style.cssText = 'visibility: hidden; opacity: 0;' :
    scrollToTopButton.style.cssText = 'visibility: visible; opacity: 1;'
}

// Events

createNavBar();

document.addEventListener('scroll', setActive)

addSectionButton.addEventListener('click', createNewSection)

expandNavbarButton.addEventListener('click', toggleCollapse)

scrollToTopButton.addEventListener('click', () => window.scrollTo(0,0))

window.addEventListener('scroll', scrolled)