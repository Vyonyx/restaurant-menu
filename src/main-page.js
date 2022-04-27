import Plate from './plate.jpeg'
import People from './people.jpeg'
import Seats from './seats.jpg'

function mainPage() {
    // DOM node creation.
    const contentContainer = document.createElement('div');
    const heroImage = document.createElement('div');
    const imageContainer = document.createElement('div');

    const heroTitle = document.createElement('h1');
    const heroStatement = document.createElement('h3');

    // Class additions.
    contentContainer.classList.add('content-container')
    heroImage.classList.add('hero-container');
    heroImage.classList.add('shadow');
    imageContainer.classList.add('image-container');
    
    // Node manipulation.
    heroTitle.innerText = 'Mission Statement';
    heroStatement.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices ut lorem ut ultricies. Aenean commodo est eget pellentesque sodales. Sed tincidunt mattis maximus. Suspendisse varius mattis tellus, ut convallis ex aliquam a. Sed pharetra nulla vel mauris dapibus, cursus tempor augue feugiat. Nulla quis nunc vel sem posuere pulvinar eu sit amet libero. Sed gravida lectus neque, sed aliquam odio sodales nec. Integer elementum nunc eget mi lacinia, vitae luctus libero tincidunt. Morbi interdum sapien nec volutpat vestibulum.'

    const imageList = [];
    const myImages = [];

    for (let i = 0; i < 3; i++) {
        const image = document.createElement('div');
        image.classList.add('main-image');
        imageList.push(image);
    }

    const plateImg = new Image();
    // const peopleImg = new Image()
    // const seatsImg = new Image()

    plateImg.src = Plate;
    // myImages.push(plateImg);
    // peopleImg.src = People;
    // myImages.push(peopleImg);
    // seatsImg.src = Seats;
    // myImages.push(seatsImg);

    const myImage = document.createElement('img');
    myImage.src = plateImg;

    for (let i = 0; i < 3; i++) {
        imageList[i].appendChild(myImage);
        imageContainer.appendChild(imageList[i]);
    };

    // Appending new nodes to new container.
    heroImage.appendChild(heroTitle);
    heroImage.appendChild(heroStatement);
    contentContainer.appendChild(heroImage);
    contentContainer.appendChild(imageContainer);

    return contentContainer
}

export default mainPage