import Email from '../assets/email.svg';
import Phone from '../assets/phone.svg';
import Address from '../assets/address.svg';

function contactPage() {

    const contactInfo = [
        {name: 'Email', detail: 'restuarant@gmail.com', symbol: Email},
        {name: 'Phone', detail: 'xxx-xxxx-xxxx', symbol: Phone},
        {name: 'Address', detail: '101 Restaurant Drive', symbol: Address},
    ];

    const contactContainer = document.createElement('div');
    const contactHeader = document.createElement('div');
    const contactTitle = document.createElement('h1');
    const contactItems = document.createElement('div');

    contactContainer.classList.add('contact-container');
    contactHeader.classList.add('contact-header');
    contactItems.classList.add('contact-items');

    contactTitle.innerText = 'Contact';
    contactHeader.appendChild(contactTitle);
    contactContainer.appendChild(contactHeader);

    function createContactItem(contactName, contactDetails, symbol) {
        const contactDetail = document.createElement('div');
        const title = document.createElement('h1');
        title.innerText = contactName;
        const symbolImage = new Image();
        symbolImage.src = symbol;
        const details = document.createElement('h3');
         details.innerText = contactDetails;
         contactDetail.appendChild(symbolImage);
         contactDetail.appendChild(title);
         contactDetail.appendChild(details);
         return contactDetail
    };

    contactInfo.forEach(item => {
        const newItem = createContactItem(item.name, item.detail, item.symbol);
        contactItems.appendChild(newItem);           
    });

    contactContainer.appendChild(contactItems);

    return contactContainer
};

export default contactPage