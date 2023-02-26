const guardarArchivo = async (files, nombreArchivo, tipoArchivo) => {
    const archivo = files[nombreArchivo];
    const resp = { isOk: false, error: null, nuevoNombre: null };
    console.log(archivo);
    if (archivo.mimetype == tipoArchivo) {
        // guardaddo del archivo

        const ahora = Date.parse(Date());
        console.log("ahora", ahora);
        resp.nuevoNombre = ahora + ".pdf";
        resp.error = await archivo.mv("./expedientes/" + resp.nuevoNombre);
        if (resp.error) {
            return resp;
        } else {
            resp.isOk = true;
            return resp;
        }

    } else {
        resp.error = "formato del archivo incorrecto";
        return resp;
    }
}
module.exports = guardarArchivo;