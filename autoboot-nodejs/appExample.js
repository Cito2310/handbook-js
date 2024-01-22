// Aplicacion basica para ejemplificar
// Crea un archivo .txt con la hora actual cada 10 segundos

const { writeFileSync } = require("fs");

main = () => {
    const generateFile = () => {
        const date = new Date();
        console.log(`Archivo generado - ${date.toISOString()}\n`)
        writeFileSync(`folderDataExample/${date.getTime()}.txt`, JSON.stringify(date.toISOString()), "utf-8" )
    }
    
    generateFile()
    setInterval( generateFile, 10000 )
}

main();