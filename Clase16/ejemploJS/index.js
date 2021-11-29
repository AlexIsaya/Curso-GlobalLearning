window.addEventListener('DOMContentLoaded', () => {
    console.log("Pagina cargadaa");

    const button = document.querySelector('#click-me');
    button.addEventListener('click', () =>{
        console.log("CLICK");
    })
});
/* agregar un evento cuando el contenido de la pg se cargue*/
console.log("Hola mundo");