function createMenuItem(title) {
    const newItem = document.createElement('div');
    newItem.classList.add('menu-item');

    const itemTitle = document.createElement('h3');
    itemTitle.innerText = title;
    newItem.appendChild(itemTitle);

    return newItem
};

function menuPage() {
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('menu-content');

    // Creating the menu header.
    const menuHeader = document.createElement('div');
    menuHeader.classList.add('menu-header');
    const menuTitle = document.createElement('h1');
    menuTitle.innerText = 'Menu';
    menuHeader.appendChild(menuTitle);

    // Creating 6x menu items.
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    for (let i = 0; i < 12; i++) {
        const newItem = createMenuItem('hmm');
        menuContainer.appendChild(newItem);
    };
    contentContainer.appendChild(menuHeader);
    contentContainer.appendChild(menuContainer);
    return contentContainer
}

export default menuPage