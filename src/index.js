import header from "./header"
import mainPage from "./main-page"
import footer from "./footer"
import './style.css'


const contentContainer = document.getElementById('contentContainer')

contentContainer.appendChild(header());
contentContainer.appendChild(mainPage());
contentContainer.appendChild(footer());
