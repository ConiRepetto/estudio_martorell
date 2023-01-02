const contenedor = document.querySelector(".containerLibros")
const URL = "../data_base/libros.json"
let librosLista = []
let contenidoHTML = ""

const mostrarCard = (contenido) => {
    const {
        id,
        title,
        autor,
        coautores,
        year,
        thumbnail
    } = contenido
    return  `<div class="cardContainer col-lg-2 col-md-4 col-sm-6 ">
                <div class="card card-libros">
                    <img id="${id}" src="${thumbnail}" class="card-img-top img-libros" alt="...">
                    <div class="card-body card-body-libros">
                        <h3 class="card-title card-title-libros" title="${title}">${title}</h3>
                        <p class="card-text card-text-libros ">${autor}</p>
                        <p class="card-text card-text-libros">Coautores:${coautores}</p>
                        <p class="card-text card-text-libros">${year}</p>
                        
                    </div>
                </div>
                </div>
            `
}

const cartelError = () => {
    return `<div class="card text-white bg-danger col-lg-6">
                <div class="card-header">Ups...!</div>
                <div class="card-body">
                    <h5 class="card-title">No pudimos cargar los productos.</h5>
                    <p class="card-text">Actualiza el sitio o intenta de nuevo en unos minutos. </p>
                </div>
            </div>`
}

const cargarContenido = async () => {
    try {
        const response = await fetch(URL)
        const data = await response.json() //convierte a una estructura de json
        console.table(data)
        librosLista = data
        librosLista.forEach(element => {
            contenidoHTML += mostrarCard(element)
        });
    } catch  {
        const response = await fetch(URL)
        const data = await response.json() //convierte a una estructura de json
        console.table(data)
        librosLista = data
        librosLista.forEach(element => {
            contenidoHTML += mostrarCard(element)
        });
        // contenidoHTML += cartelError()
    } finally {
        contenedor.innerHTML = contenidoHTML
    }
}

cargarContenido()