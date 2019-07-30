const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite:{
        alias:'l',
        default:10
    }
}
const argv = require('yargs')
.command('listar','Imprime en consola la tabla de multiplicar',opts)
.command('crear','Genera un archivo con la tabla de multiplicar',opts)
.help()
.argv;

const { crearArchivo, listarTable }=require('../multiplicar/multiplicar');

let comando = argv._[0];
switch (comando) {
    case 'listar':
            listarTable(argv.base,argv.limite)
        break;
    case 'crear':
             crearArchivo(argv.base,argv.limite)
                .then( archivo => console.log(`Archivo creado: ${ archivo }`))
                .catch(e => console.log(e) );
        
        break;
    default:
        console.log('Comando no reconocido')
        break;
}

module.exports={
    argv
}
