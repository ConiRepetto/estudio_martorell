const contenedor = document.querySelector(".containerAcademico")
const URL = "../data_base/academico.json"
let academicoLista = []
let contenidoHTML = ""

const mostrarCard = (contenido) => {
    const {
        id,
        title,
        autor, 
        info,       
        year,
        universidad,
        thumbnail,        
    } = contenido
    return `
    
    <div class="academicoContainer col-lg-4">
                <div class="academicoCard">
                    <div class="img_acad_container">
                        <img id="${id}" src="${thumbnail}" class="img_acad" alt="...">
                    </div>
                    <div class="container_titulos_acad">
                        <p class="titulos_acad" id="${id}" >${title}</p>
                        <p class="titulos_acad_info">${info}</p>
                        <p class="titulos_acad_info">${autor}</p>
                        <p class="titulos_acad_fecha">${year}</p>
                        <p class="titulos_acad_fecha">${universidad}</p>
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
        academicoLista = data
        academicoLista.forEach(element => {
            contenidoHTML += mostrarCard(element)
        });
    } catch {
        const response = await fetch(URL)
        const data = await response.json() //convierte a una estructura de json
        console.table(data)
        academicoLista = data
        academicoLista.forEach(element => {
            contenidoHTML += mostrarCard(element)
        });
        // contenidoHTML += cartelError()
    } finally {
        contenedor.innerHTML = contenidoHTML
    }
}

cargarContenido()