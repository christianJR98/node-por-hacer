const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    descripcion: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'actualiza el estado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borra una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}