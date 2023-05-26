let nombres = [];

function agregarNombres() {
    const cantidadNombres = parseInt(document.getElementById("cantidadNombres").value);

    for (let i = 1; i <= cantidadNombres; i++) {
        const nombre = prompt(`Ingrese el nombre ${i}:`);
        nombres.push(nombre);
    }

    const listaNombres = document.getElementById("listaNombres");
    listaNombres.innerHTML = "";
    nombres.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaNombres.appendChild(li);
    });

}