export function llenarTienda(){

    let productosBD = [

        { foto: 'img/producto1.jpg', nombre: "Audifonos de Cable", precio: 10000,descripcion:""},
        { foto: 'img/producto2.jpg', nombre: "Audifonos Inalambricos", precio: 80000},
        { foto: 'img/producto3.jpg', nombre: "Diadema Gamer", precio: 50000},
        { foto: 'img/producto4.jpg', nombre: "Control Gamer", precio: 35500 },
        { foto: 'img/producto5..jpg', nombre: "Apple Watch", precio: 260000},
        { foto: 'img/producto6.jpg', nombre: "GoPro HERO7", precio: 1500000 },
        { foto: 'img/producto7.jpg', nombre: "Aro de Luz", precio: 60000},
        { foto: 'img/producto8.jpg', nombre: "Parlante KTS-1057", precio: 45000},
        { foto: 'img/producto9.jpg', nombre: "Cargador Apple", precio: 95000},
        { foto: 'img/producto10.jpg', nombre: "Candado con Huella  ", precio: 75000}
    
    ]
    
    //Necesito recorrer un arreglo en JS
    
    //1.Creo una variable para almacenar la base sobre la cual voy a pintar
    let fila=document.getElementById("fila")
    productosBD.forEach(function(producto){
        /*console.log(producto.foto)
        console.log(producto.nombre)
        console.log(producto.precio)*/
    
        //2. pintando etiquetas
    
        //div con la clase col
        let columna=document.createElement("div")
        columna.classList.add("col")
    
        //div con las clases card h-100
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")
    
        //img con la clase card-img-top
        let foto=document.createElement("img")
        foto.classList.add("card-img-top")
        foto.src=producto.foto
    
        //h4 con la clase text-center
        let titulo=document.createElement("h4")
        titulo.classList.add("text-center")
        titulo.textContent=producto.nombre

        //creando un boton
        let boton=document.createElement("button")
        boton.setAttribute("type","button")
        boton.classList.add("btn","btn-warning","mx-4","mb-4")
        boton.textContent="ver producto"
        
        //3. PADRES E HIJOS
        tarjeta.appendChild(foto)
        tarjeta.appendChild(titulo)
        tarjeta.appendChild(boton)
    
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    
    })
    


}




   
   
    









