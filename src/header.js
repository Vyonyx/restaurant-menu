// Generating the front page of the restaurant.
function header() {
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('header');
    
    const headerBanner = document.createElement('h1');
    headerBanner.classList.add('banner');

    const headerTitle = document.createElement('h1');
    headerTitle.innerText = 'Test Kitchen';
    headerTitle.classList.add('titleText');
    headerBanner.appendChild(headerTitle);

    const navContainer = document.createElement('div');
    navContainer.classList.add('nav-container')

    // Options to simulate tabbed navigation. 
    const mainLink = document.createElement('a');
    const mainTitle = document.createTextNode('Main');
    mainLink.appendChild(mainTitle);
    mainLink.title = 'Main';
    mainLink.href = './';
    mainLink.classList.add('titleText');
    navContainer.appendChild(mainLink)
    
    const menuLink = document.createElement('a');
    const menuTitle = document.createTextNode('Menu');
    menuLink.appendChild(menuTitle);
    menuLink.title = 'Menu';
    menuLink.href = './';
    menuLink.classList.add('titleText');
    navContainer.appendChild(menuLink)
    
    const contactLink = document.createElement('a');
    const contactTitle = document.createTextNode('Contact');
    contactLink.appendChild(contactTitle);
    contactLink.title = 'Contact';
    contactLink.href = './';
    contactLink.classList.add('titleText');
    navContainer.appendChild(contactLink)
    

    headerContainer.appendChild(headerBanner);
    headerContainer.appendChild(navContainer);

    return headerContainer
};

export default header
