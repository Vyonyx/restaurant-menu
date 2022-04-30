import Plate from '../assets/plate.jpeg'
import People from '../assets/people.jpeg'
import Seats from '../assets/seats.jpg'

function addImage(img) {
    const newImg = document.createElement('img');
    newImg.src = img;
    newImg.classList.add('main-img');
    return newImg
}

function mainPage() {
    // DOM node creation.
    const contentContainer = document.createElement('div');
    const heroImage = document.createElement('div');
    const imageContainer = document.createElement('div');

    const heroTitle = document.createElement('h1');
    const heroStatement = document.createElement('h3');

    // Class additions.
    contentContainer.classList.add('main-content')
    heroImage.classList.add('hero-message');
    imageContainer.classList.add('image-container');
    
    // Node manipulation.
    heroTitle.innerText = 'Mission Statement';
    heroStatement.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices ut lorem ut ultricies. Aenean commodo est eget pellentesque sodales. Sed tincidunt mattis maximus. Suspendisse varius mattis tellus, ut convallis ex aliquam a. Sed pharetra nulla vel mauris dapibus, cursus tempor augue feugiat. Nulla quis nunc vel sem posuere pulvinar eu sit amet libero. Sed gravida lectus neque, sed aliquam odio sodales nec. Integer elementum nunc eget mi lacinia, vitae luctus libero tincidunt. Morbi interdum sapien nec volutpat vestibulum.'

    // Adding images.
    imageContainer.append(addImage(People));
    imageContainer.append(addImage(Plate));
    imageContainer.append(addImage(Seats));

    // Appending new nodes to new container.
    heroImage.appendChild(heroTitle);
    heroImage.appendChild(heroStatement);
    contentContainer.appendChild(heroImage);
    contentContainer.appendChild(imageContainer);

    return contentContainer
}

export default mainPage