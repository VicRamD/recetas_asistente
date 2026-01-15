export const renderizarPais = (pais) =>{
    //console.log("En views - renderizarPais");
    //console.log("Datos previos:", pais);

    let nombre = "";
    if(pais.nombreOficial) {
        nombre = pais.nombreOficial;
    } else {
        nombre = pais.nombreComun;
    }

    let fronteras = (pais.fronteras.length === 0) ? ["No registrados"] : pais.fronteras;

    return {
        id: pais._id,
        nombre,
        capital: pais.capital,
        paisesFrontera: fronteras,
        area: pais.area,
        poblacion: pais.poblacion,
        timezones: pais.timezones,
        creador: pais.creador
    };
}

export const renderizarPaises = (paises) => {
    return paises.map(pais => renderizarPais(pais));
}

/**
 * -----------------------------------------
 * -----------------------------------------
 */

export const renderizarReceta = (receta) =>{
    //console.log("En views - renderizarReceta");
    //console.log("Datos previos:", receta);

    return {
        nombre: receta.nombre,
        imagen: receta.image,
        regiones: receta.regiones,
        resumen: receta.resumen,
        tiposPlato: receta.tiposPlato,
    };
}

export const renderizarRecetas = (recetas) => {
    return recetas.map(receta => renderizarReceta(receta));
}