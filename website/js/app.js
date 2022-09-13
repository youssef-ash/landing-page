// Global Variables

let sections = Array.from(document.querySelectorAll('section'));
const navList = document.getElementById('navbar__list');
const addSectionButton = document.getElementById('navbar__add');
const expandNavbarButton = document.getElementById('navbar__expand')

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
        listItem.innerHTML = `<a href="#section${i}">Section ${i}</a>`;
        navList.appendChild(listItem);
    }
}

// toggles collapsed class on nav bar
function toggleExpand() {
    navList.classList.toggle('collapsed')
}

// creates new editable section
function createNewSection() {

    // creating elements
	const content = document.querySelector("main");
    let newSection = document.createElement("section");
    let newListItem = document.createElement("li");
    let number = sections.length + 1;

    // sets atrributes and fills content in new section
    newSection.setAttribute("id", `section${number}`);
    newSection.setAttribute("contentEditable", "true")
    newSection.innerHTML = `<div class="landing__container">
    <h2>Section ${number}</h2>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer massa erat, luctus vestibulum mauris quis, convallis accumsan nisi. Vivamus non risus quam. Nulla tincidunt auctor tincidunt. Aliquam lacinia, nisi cursus aliquet sagittis, sapien purus porttitor felis, sit amet eleifend tellus metus ut elit. Suspendisse vitae tempor mi. Aenean bibendum, sapien a luctus dictum, risus magna vestibulum risus, quis posuere purus sem a mauris. Cras eu leo neque. Vivamus sit amet enim scelerisque turpis mattis fringilla.
    <br><br>
    Quisque cursus pellentesque orci. Maecenas ornare, magna vel luctus ultricies, erat tellus fermentum ipsum, eu tempus massa dolor vitae nulla. Aliquam vel ornare lorem. Nam et tellus nulla. Vestibulum a pretium justo. Nam purus neque, congue a scelerisque id, scelerisque vitae mauris. In scelerisque augue enim, id ultricies tellus placerat at. Praesent tempor tellus non ipsum maximus cursus. In vel tempus ante. Sed eget dolor eu nisl convallis porta sit amet sed sapien. Mauris aliquam vehicula metus, at consectetur tellus sodales eget. Praesent quam mauris, ornare sed nibh sit amet, imperdiet rhoncus enim. Fusce pretium est ac pharetra pharetra. Vestibulum eu ex erat.
    </p>
    </div>`;
    content.appendChild(newSection);
    sections.push(newSection); 

    // sets attributes and adds anchor link to new nav element
    newListItem.setAttribute("class", "navbar__elements");
    newListItem.innerHTML = `<a href="#section${number}">Section ${number}</a>`;
    navList.appendChild(newListItem);
}

// Events

createNavBar();

document.addEventListener('scroll', () => {
    sections.forEach(section => {
        if (isInViewport(section.firstElementChild.firstElementChild.nextElementSibling)) {
            section.classList.add("active")
        } else {
            section.classList.remove("active")
        }
    })
})


addSectionButton.addEventListener('click', createNewSection)

expandNavbarButton.addEventListener('click', toggleExpand)