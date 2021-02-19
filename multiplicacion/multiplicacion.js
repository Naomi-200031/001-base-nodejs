const fs = require('fs'); //aqui importamos el paquete de manipulacion de archivos

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let tabla = '';

        if (!Number(base)) {
            reject('Favor de insertar un numero valido');
            return;
        }

        if (!Number(limite)) {
            reject('Favor de insertar un numero valido');
            return;
        }
        for (let i = 1; i <= limite; i++) {
            tabla += `${base} x ${i} = ${base * i}\n`;
        }

        fs.writeFile(`Tablas/Tabla -${base}.txt`, tabla, (err) => {
            if (err) reject(err)
            else
                resolve(`Tabla-${base}.txt`);
            console.log(`El archivo Tabla-2.txt ha sido generado con exito`);

        });
    });
};

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('Favor de insertar un numero valido');
            return;
        }

        if (!Number(limite)) {
            reject('Favor de insterar un limite  valido');
            return;
        }

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} x ${i} = ${base * i}\n`);
        }
    });
};

module.exports = {
    crearArchivo,
    listarTabla,
};