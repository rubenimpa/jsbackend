class Usuario {

    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        return this.nombre + " " + this.apellido;
    }

    addMascota(mascota) {
        this.mascotas.push(mascota);
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(nombre, autor) {
        this.libros.push({"nombre": nombre, "autor": autor});
    }

    getBookNames() {
        return this.libros.map(libro => libro.nombre);
    }

}

let usuario = new Usuario('Ruben', 'Impa', [], []);

console.log(usuario.getFullName());

usuario.addMascota('Perro');
usuario.addMascota('Rata');
console.log(usuario.mascotas);

console.log(usuario.countMascotas());

usuario.addBook("Naruto", "Masashi Kishimoto");
usuario.addBook("Hunter x Hunter", "Yoshihiro Togashi");
console.log(usuario.libros);

console.log(usuario.getBookNames());