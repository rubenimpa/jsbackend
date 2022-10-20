const fs = require('fs');

class Contenedor {

    constructor(nombreArchivo) {
        this.nombreArchivo = nombreArchivo;
        this.id = 1;
    }

    async save(item) {
        try {
            item.id = this.id;
            this.id++;
            await fs.promises.appendFile(this.nombreArchivo, JSON.stringify(item));
            return this.id;
        } catch(error) {
             console.log(error);
        }
    }

    async getAll() {
        try {
            const contenido = await fs.promises.readFile(this.nombreArchivo, 'utf-8')
            return contenido;
        } catch(error) {
            console.log(error);
        }
    }

}

const contenedor = new Contenedor('./productos.txt');
let item = {title: 'Naruto 1', precio: 1100, thumbnail: 'img1'};
let item2 = {title: 'Naruto 2', precio: 1100, thumbnail: 'img2'};
let item3 = {title: 'Naruto 3', precio: 1100, thumbnail: 'img3'};


contenedor.save(item);
contenedor.save(item2);
contenedor.save(item3);

console.log(contenedor.getAll());