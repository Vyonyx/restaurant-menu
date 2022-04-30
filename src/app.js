import header from "./pages/header"
import mainPage from "./pages/main-page"
import menuPage from "./pages/menu-page"
import footer from "./pages/footer"
import './style.scss'


const contentContainer = document.getElementById('contentContainer');

function createPage(content) {
    contentContainer.appendChild(header());
    contentContainer.appendChild(content());
    contentContainer.appendChild(footer());
}

createPage(mainPage);

function removeContent() {
    while (contentContainer.lastChild) {
        contentContainer.removeChild(contentContainer.firstChild);
    }
};

removeContent();
createPage(menuPage);

