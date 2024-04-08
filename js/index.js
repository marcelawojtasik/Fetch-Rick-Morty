const main_container = document.getElementById('characters');


const getCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();

    const {info, results} = data; /*Desestructuro el objeto en sus 2 props. Info es un objeto. Results es un array*/
    /*El info lo puedo usar para que me permita traer los siguientes 20 characters o hacer un scroll infinito*/

    results.forEach(character => {
        const article = document.createElement('article');
        /*Le digo que por cada elemento cree el elem article que va a contener la info*/

        article.className = 'character';

        article.innerHTML = ` 
            <img src="${character.image}" alt="Imagen del personaje">
            <h2>${character.name}</h2>
            <div>
                <p>${character.species}</p>
                <p><span class= "${character.status.toLowerCase()}"></span>${character.status}</p>
            </div>
            <button type="button" id="${character.id}">Ver personaje </button>
        `
        /*Creo la estructura que va a tener cada personaje. Tengo que saber como se llama cada item. Lo veo en la doc de la app o con el inspector*/

        main_container.appendChild(article);

        /*Con esta instruccion lo meto en el DOM. Hasta el paso anterior, solo lo creaba pero no lo estaba inyectando en el DOM*/
    });
   
} 

getCharacters();

/*Para pasar la data al HTML, tengo que manipular el DOM */

document.addEventListener('click', async (e) => {
    /*console.log(e.target.id); lo use Para que me traiga el id del elemento a la consola */
    const response = await fetch('https://rickandmortyapi.com/api/character/'+ e.target.id);
    const data = await response.json();
    
    main_container.innerHTML = `
    <a href="./index.html">Volver</a>
    <article class="character">
    <img src="${data.image}" alt="Imagen del personaje">
            <h2>${data.name}</h2>
            <div>
                <p>${data.species}</p>
                <p><span class= "${data.status.toLowerCase()}"></span>${data.status}</p>
            </div>
            <button type="button" id="${data.id}">Ver personaje </button>
    </article>
    `
/**La misma estructura q antes pero no para character si no para data, asi me trae la info */

/*Hay una mejora en cuanto al uso de button en la clase o img, ver codigo */


})

