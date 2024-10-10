import { Componente1 } from "./componentes/componente_1/componente_1";
import { Componente2 } from "./componentes/componente_2/componente_2";
let DOM = document.querySelector("#root");

root.appendChild(Componente1);



let componente_1 = document.createElement('div');
componente_1.className="comp1";
componente_1.appendChild(componente_1());
DOM.appendChild(componente_1);

let componente_2 = document.createElement('div');
componente_2.className="comp1";
componente_2.appendChild(componente_2());
DOM.appendChild(componente_2);


