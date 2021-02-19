const argv = require('yargs')
    .command('listar', 'Imprime en pantalla la tabla de multiplicar:', {
        base: {
            default: 'true',
            alias: 'b'
        },
        limite: {
            alias: '1',
            default: 10
        }
    })
    .command('Crear', 'Crea un archivo con la tabla de multiplicar', {
        base: {
            default: 'true',
            alias: 'b'
        },
        limite: {
            alias: '1',
            default: 10
        }
    })
    .help()
    .argv;
const multiplicar = require('./multiplicacion/multiplicacion');

let comando = argv._[0];

let base = argv.base;
let limite = argv.limite;
git status
switch (comando) {
    case 'listar':
        multiplicar.listarTabla(base, limite)
            .then()
            .catch(error => console.log(`Ocurrio un error: ${error}`));
        break;
    case 'crear':
        multiplicar
            .crearArchivo(base, limite)
            .then(archivo => console.log(`El archivo ${archivo} ha sido generado con exito.`))
            .catch(error => console.log(`Ocurrio un error: ${error}`));
        break;
    default:
        console.log('comando no reconocido');
}