class IRepository {
    obtenerRecetaPorId(id) {
        throw new Error("Método 'obtenerRecetaPorId()' no implementado");
    }
    obtenerTodasLasRecetas() {
        throw new Error("Método 'obtenerTodasLasRecetas()' no implementado");
    }

    //DRegistros que vienen de la API
    registrarRecetasAPI(listaDeRecetas){
        throw new Error("Método 'registrarRecetasAPI()' no implementado");
    }

    crearNuevaReceta(datosPais){
        throw new Error("Método 'crearNuevaReceta()' no implementado");
    }

    actualizarReceta(id, datosReceta){
        throw new Error("Método 'actualizarReceta()' no implementado");
    }

    eliminarRecetaPorID(id){
        throw new Error("Método 'eliminarRecetaPorID()' no implementado");
    }
}

export default IRepository;