const products = [{
    id: '1',
    nombre: 'Piluso1',
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp66e8fJu1aOo7f-v5PeCIUlxFEWS0GKy-FAJAQDzzCZ_ffbRl3mP6Q4Pry1KoW2xH4zE&usqp=CAU',
    cantidad: 10,
    precio: 1500,
    categoria: 'pilusos',
    descripcion: 'Detalle de producto'
},
{
    id: '2',
    nombre: 'Piluso2',
    imageURL: 'https://www.digitalsport.com.ar/files/products/62b6201b9c88f-555010-1200x1200.jpg',
    cantidad: 10,
    precio: 3000,
    categoria: 'pilusos',
    descripcion: 'Detalle de producto'
},
{
    id: '3',
    nombre: 'Bolso1',
    imageURL: 'https://http2.mlstatic.com/D_NQ_NP_875707-MLA69139903722_042023-O.webp',
    cantidad: 10,
    precio: 5500,
    categoria: 'bolsos',
    descripcion: 'Detalle de producto'
},
{
    id: '4',
    nombre: 'Bolso2',
    imageURL: 'https://http2.mlstatic.com/D_NQ_NP_953498-MLA69618212463_052023-O.webp',
    cantidad: 10,
    precio: 4500,
    categoria: 'bolsos',
    descripcion: 'Detalle de producto'
},
{
    id: '5',
    nombre: 'Cinto1',
    imageURL: 'https://www.bijouaccesorios.com.ar/wp-content/uploads/2022/07/C-125-Cinto-de-cadena-por-mayor.-Cintos-de-cadenas-por-mayor-temporada-.-Accesorios-de-moda-por-mayor.-bijouterie-por-mayor.jpg',
    cantidad: 10,
    precio: 2000,
    categoria: 'cintos',
    descripcion: 'Detalle de producto'
},
{
    id: '6',
    nombre: 'Cinto2',
    imageURL: 'https://www.bijouaccesorios.com.ar/wp-content/uploads/2022/07/C-127-Cinto-de-cadena-por-mayor.-Cintos-de-cadenas-por-mayor-temporada-.jpg',
    cantidad: 10,
    precio: 4500,
    categoria: 'cintos',
    descripcion: 'Detalle de producto'
},
{
    id: '7',
    nombre: 'Piluso3',
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp66e8fJu1aOo7f-v5PeCIUlxFEWS0GKy-FAJAQDzzCZ_ffbRl3mP6Q4Pry1KoW2xH4zE&usqp=CAU',
    cantidad: 10,
    precio: 1500,
    categoria: 'pilusos',
    descripcion: 'Detalle de producto'
},
{
    id: '8',
    nombre: 'Piluso4',
    imageURL: 'https://www.digitalsport.com.ar/files/products/62b6201b9c88f-555010-1200x1200.jpg',
    cantidad: 10,
    precio: 3000,
    categoria: 'pilusos',
    descripcion: 'Detalle de producto'
},
{
    id: '9',
    nombre: 'Bolso3',
    imageURL: 'https://http2.mlstatic.com/D_NQ_NP_875707-MLA69139903722_042023-O.webp',
    cantidad: 10,
    precio: 5500,
    categoria: 'bolsos',
    descripcion: 'Detalle de producto'
},
{
    id: '10',
    nombre: 'Bolso4',
    imageURL: 'https://http2.mlstatic.com/D_NQ_NP_953498-MLA69618212463_052023-O.webp',
    cantidad: 10,
    precio: 4500,
    categoria: 'bolsos',
    descripcion: 'Detalle de producto'
},
{
    id: '11',
    nombre: 'Cinto3',
    imageURL: 'https://www.bijouaccesorios.com.ar/wp-content/uploads/2022/07/C-125-Cinto-de-cadena-por-mayor.-Cintos-de-cadenas-por-mayor-temporada-.-Accesorios-de-moda-por-mayor.-bijouterie-por-mayor.jpg',
    cantidad: 10,
    precio: 2000,
    categoria: 'cintos',
    descripcion: 'Detalle de producto'
},
{
    id: '12',
    nombre: 'Cinto4',
    imageURL: 'https://www.bijouaccesorios.com.ar/wp-content/uploads/2022/07/C-127-Cinto-de-cadena-por-mayor.-Cintos-de-cadenas-por-mayor-temporada-.jpg',
    cantidad: 10,
    precio: 4500,
    categoria: 'cintos',
    descripcion: 'Detalle de producto'
}]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000)
    })    
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 1000)
    })
}

export const getProductByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.categoria === productCategory))
        }, 1000)
    })
}