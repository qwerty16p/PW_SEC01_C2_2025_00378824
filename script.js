
function changeLayout() {
    const contentContainer = document.getElementById('content-columns');
    contentContainer.classList.toggle('content-rows');
}


function changeTitle() {
    const mainTitle = document.getElementById('main-title');
    if (mainTitle.textContent === "HTML & CSS: Curso práctico avanzado") {
        mainTitle.textContent = "El título ha sido cambiado";
    } else {
        mainTitle.textContent = "HTML & CSS: Curso práctico avanzado";
    }
}


function changeDescriptionColor() {
    const subtitle = document.getElementById('description-subtitle');
    const descriptionSection = document.getElementById('book-description');
    const paragraphs = descriptionSection.getElementsByTagName('p');
    const newColor = '#2C92B8';

    subtitle.style.color = newColor;

    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = newColor;
    }
}


function addImage() {
    const bookInfoSection = document.getElementById('book-info');

    if (document.getElementById('book-cover-image')) {
        alert('La imagen ya fue agregada.');
        return;
    }

    const newImage = document.createElement('img');
    
    newImage.src = 'imagenes/imagen.png'; 

    newImage.id = 'book-cover-image';
    newImage.alt = 'Portada del libro local';

    newImage.style.marginTop = '10px';
    newImage.style.width = '50%';
    newImage.style.height = 'auto';
    newImage.style.display = 'block';
    newImage.style.borderRadius = '5px';
    
    bookInfoSection.appendChild(newImage);
}