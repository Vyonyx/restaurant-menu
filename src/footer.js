function footer() {
    const footerContainer = document.createElement('div');
    const footerText = document.createElement('h3');

    footerContainer.classList.add('footer');
    footerText.innerText = '@github.com/vyonyx';

    footerContainer.appendChild(footerText);
    return footerContainer
}

export default footer