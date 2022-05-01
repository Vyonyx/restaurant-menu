function createMenuItem(title) {
    const itemContainer = document.createElement('div');
    const itemText = document.createElement('div');
    const itemImg = document.createElement('div');

    itemContainer.classList.add('item-container');
    itemText.classList.add('item-text');
    itemImg.classList.add('item-img');


    const itemTitle = document.createElement('h3');
    const itemDescription = document.createElement('p');
    itemTitle.innerText = title;
    itemDescription.innerText = 'This is a generic description about this particular menu item. It goes into a bit of depth about the ingredients used and why its so special.'
    itemText.appendChild(itemTitle);
    itemText.appendChild(itemDescription);


    itemContainer.appendChild(itemImg);
    itemContainer.appendChild(itemText);

    return itemContainer
};

function addImage(img) {
    const newImg = document.createElement('img');
    newImg.src = img;
    newImg.classList.add('menu-img');
    return newImg
}

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

    let dishes = [
        'Chicken Sandwich',
        'Steak and Cheese Pie',
        'Pepperoni Pizza',
        'Garden Salad',
        'Falafel Bites',
        'Eggs Benny'
    ];

    dishes.forEach(dish => {
        const newItem = createMenuItem(dish);
        menuContainer.appendChild(newItem);
    });

    contentContainer.appendChild(menuHeader);
    contentContainer.appendChild(menuContainer);
    return contentContainer
}

export default menuPage