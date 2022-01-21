import { HasFormatter } from "../interfaces/HasFormatter.js";

// Creamos una clasee que como parametro obtiene un elemento del DOM

export class ListTemplate {
    constructor(
        private ulContainer: HTMLUListElement
    ){}
    
    // Este methodo necesita 3 parametros para renderizar un li dentro del contenedor

    /* 1 - El objeto que que queremos mostrar, un titulo para dicho objeto y por ultimo
    la poscicion en la que queremos ver el objeto creado*/

    render(
        //Recibira un objeto que tiene si o si la interface hasFormater para asegurarnos
        item: HasFormatter,
        //El titlulo que sera un simple string que ilustrara el tipo de transaccion
        heading: string,
    ){  

        //Creamos los elementos ya que no existen en el DOM
        /*El elemento*/ const p = document.createElement('p');
        /*El titulo*/ const h4 = document.createElement('h4');
        /*El contenido*/ const details = document.createElement('p');
        const form = document.querySelector('.new-item-form') as HTMLFormElement;

        //Anadimos el conteido que va dentro de los elementos que acabamos de crear
        h4.innerText = heading;
        details.innerText = item.format();

        //Metemos el h4 dentro de nuestro elemento li
        p.append(h4);
        p.append(details);

        this.ulContainer.append(p)
    }
}