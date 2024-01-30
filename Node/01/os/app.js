const os = require('os')

function getOs() {
    console.log('Sistema Operativo:', os.platform());
    console.log('Arquitectura del Procesador:', os.arch());
    console.log('Memoria Libre:', os.freemem());
}

function getStats() {
    const cpus = os.cpus();
    const usagePerCore = cpus.map((core) => ({
        model: core.model,
        speed: core.speed,
        times: core.times
    }));

    return {
        totalCores: cpus.length,
        usagePerCore
    };
}

module.exports = { getOs, getStats }

