import header from "./pages/header"
import mainPage from "./pages/main-page"
import menuPage from "./pages/menu-page"
import contactPage from './pages/contact-page';
import footer from "./pages/footer"
import './style.scss'


const contentContainer = document.getElementById('contentContainer');

function pageHandler() {
    const headerContent = header();

    const navMainButton = headerContent.querySelector('.main');
    const navMenuButton = headerContent.querySelector('.menu');
    const navContactButton = headerContent.querySelector('.contact');

    navMainButton.addEventListener('click', () => {
        removeContent();
        createPage(mainPage);
    });
    navMenuButton.addEventListener('click', () => {
        removeContent();
        createPage(menuPage);
    });
    navContactButton.addEventListener('click', () => {
        removeContent();
        createPage(contactPage);
    });

    createPage(mainPage);

    function createPage(content) {
        contentContainer.appendChild(headerContent);
        contentContainer.appendChild(content());
        contentContainer.appendChild(footer());
    }
    
    function removeContent() {
        while (contentContainer.lastChild) {
            contentContainer.removeChild(contentContainer.firstChild);
        }
    };

    return {
        removeContent
    }
};

const restaurantPage = pageHandler();
