
let nombre = document.getElementById('nombre')
let apellido = document.getElementById('apellido')
let direccion = document.getElementById('direccion')
let contacto = document.getElementById('contacto')
const contenedorForm = document.getElementById('contenedorForm')
const form = document.getElementById('form');
let boton_comprar = document.getElementById(comprar)

let formulario = [
    {
        id: '0',
        nombre: '',
        apellido: '',
        direccion: '',
        contacto: '',
        paleta: '',
    }


]


form.addEventListener('submit', function(e) {
    e.preventDefault() //Prevenimos el evento por defecto de los formularios



    const factura = document.getElementById('facturas')
    let nombre = document.getElementById('nombre').value
    let apellido = document.getElementById('apellido').value
    let direccion = document.getElementById('direccion').value
    let contacto = document.getElementById('contacto').value
    let paleta = document.getElementById('paleta').value

    //Creamos un objeto con la nueva tarea
    let infoNueva = {
        id: formulario.length,
        nombre: nombre,
        apellido: apellido,
        direccion: direccion,
        contacto: contacto,
        paleta: paleta,
        check: false
    }

    //añadimos la tarea al arreglo
    formulario.push(infoNueva)

    factura.innerHTML = ''; //vaciamos nuesta caja de listas

    //Llenamos nuestra caja de listas con las que ya se realizaron
    formulario.forEach(task=>{
        const { id, nombre, paleta } = task //Desestructuramos el objeto
        //Insetamos HTML con contenido dinamico que traemos del array
        factura.innerHTML += `
        <div class="formfactura">
        <div class="tituloformfactura__div">
        <h2 class="tituloformfactura__div-h2"> Factura de Compras</h2>
        </div>
    <form class="formufac">
        <div class="formufac__div">
        <label class="formufac__div-label">Nombre</label>
        <input id="nombreFactura" value="${nombre}" class="formufac__div-input">
        </div>
        <div class="formufac__div">
        <label class="formufac__div-label">paleta comprada</label>
        <input id="paleta" value="${paleta}" class="formufac__div-input">
        </div>
    </form>
</div>
    `
    })
})

