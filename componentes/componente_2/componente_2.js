
export function Componente2() {
    let components = document.createElement('div');
   Componente2.classList.add('componente-2');
  
    let titlo = document.createElement('h3');
    titlo.textContent = 'CARACTERÍSTICAS';
  
    let lista = document.createElement('ul');
    let items = ['Item 1', 'Item 2', 'Item 3'];
    
    for (let i = 0; i < items.length; i++) {
      let listItem = document.createElement('li');
      listItem.textContent = items[i];
      lista.appendChild(listItem);
    }
  
    Componente2.appendChild(titlo);
   Componente2.appendChild(lista);
  
    return container;
  }
  
