function Componente1() {
    let container = document.createElement('div');
    container.classList.add('componente-1');
  
    let image = document.createElement('div');
    image.classList.add('imagen');
  
    let description = document.createElement('p');
    description.textContent = 'Descripción del componente';
  
    container.appendChild(image);
    container.appendChild(description);
  
    return container;
  }


export  {Componente1}
  