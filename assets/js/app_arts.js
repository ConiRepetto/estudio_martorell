const contenedor = document.querySelector(".containerArts")
const URL = "../data_base/articulos.json"
let artsLista = []
let contenidoHTML = ""

const mostrarCard = (contenido) => {
    const {
        id,
        title,
        autor,
        coautores,
        year,
        editorial,
        category,
        link,
    } = contenido
    return `<div class="articulosLista">
                <a id="${id}" href="${link}" target="_blank">"${title}", ${year}</a>
                <hr/>
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
    } catch {
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