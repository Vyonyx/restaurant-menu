function createNavLink(name) {
    // const link = document.createElement('p');
    // link.classList.add(name.toLowerCase());
    // const newTitle = document.createTextNode(name);
    // link.appendChild(newTitle);
    // link.title = name;
    // link.href = './';

    const link = document.createElement('p');
    link.innerText = name;
    link.classList.add(name.toLowerCase());
    return link
}

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
    navContainer.appendChild(createNavLink('Main'));
    navContainer.appendChild(createNavLink('Menu'));
    navContainer.appendChild(createNavLink('Contact'));
    

    headerContainer.appendChild(headerBanner);
    headerContainer.appendChild(navContainer);

    return headerContainer
};

export default header
