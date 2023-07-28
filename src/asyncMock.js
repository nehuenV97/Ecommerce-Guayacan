const products = [
{
    id: '1',
    nombre: 'Piluso algodón',
    imageURL: 'https://www.elipse.com.ar/wp-content/uploads/2021/01/M606-FRANCIA.jpg',
    cantidad: 15,
    precio: 1500,
    categoria: 'pilusos',
    descripcion: 'Piluso 100% algodón, color azul.'
},
{
    id: '2',
    nombre: 'Piluso cuadriculado',
    imageURL: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/284/929/products/281844-b1-367537332b27bc6edf16661009705758-640-0.webp',
    cantidad: 10,
    precio: 3000,
    categoria: 'pilusos',
    descripcion: 'Piluso cuadriculado de tela, blanco y negro.'
},
{
    id: '3',
    nombre: 'Bolso deportivo gris',
    imageURL: 'https://redsport.vteximg.com.br/arquivos/ids/1135482-1000-1000/BOLSOS-ATHIX-CLUB-BAG-UNISEX.jpg?v=638149095889030000',
    cantidad: 10,
    precio: 20000,
    categoria: 'bolsos',
    descripcion: 'Amplio compartimiento principal forrado con pequeño bolsillo interno acolchonado. Amplio bolsillo frontal con cierre.'
},
{
    id: '4',
    nombre: 'Bolso de viaje',
    imageURL: 'https://tropea.com.ar/pub/media/catalog/product/cache/d1bd8443ca10f2cb00000164c0513360/a/f/afa2e1b77fe01b8a901439595b30dd96_itp5220m21ma_2.jpg',
    cantidad: 5,
    precio: 15000,
    categoria: 'bolsos',
    descripcion: '2 Bolsillos exteriores con cierre. Manija con velcro. Manija trasera.'
},
{
    id: '5',
    nombre: 'Cinto eco cuero',
    imageURL: 'https://www.bijouaccesorios.com.ar/wp-content/uploads/2022/07/C-125-Cinto-de-cadena-por-mayor.-Cintos-de-cadenas-por-mayor-temporada-.-Accesorios-de-moda-por-mayor.-bijouterie-por-mayor.jpg',
    cantidad: 10,
    precio: 3000,
    categoria: 'cintos',
    descripcion: 'Cinto de eco cuero con hebilla acero.'
},
{
    id: '6',
    nombre: 'Cinto cuero',
    imageURL: 'https://www.bijouaccesorios.com.ar/wp-content/uploads/2022/07/C-127-Cinto-de-cadena-por-mayor.-Cintos-de-cadenas-por-mayor-temporada-.jpg',
    cantidad: 15,
    precio: 4500,
    categoria: 'cintos',
    descripcion: 'Cinto de símil cuero con hebilla de níquel.'
},
{
    id: '7',
    nombre: 'Piluso1',
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp66e8fJu1aOo7f-v5PeCIUlxFEWS0GKy-FAJAQDzzCZ_ffbRl3mP6Q4Pry1KoW2xH4zE&usqp=CAU',
    cantidad: 15,
    precio: 1500,
    categoria: 'pilusos',
    descripcion: 'Detalle de producto'
},
{
    id: '8',
    nombre: 'Piluso2',
    imageURL: 'https://www.digitalsport.com.ar/files/products/62b6201b9c88f-555010-1200x1200.jpg',
    cantidad: 10,
    precio: 3000,
    categoria: 'pilusos',
    descripcion: 'Detalle de producto'
},
{
    id: '9',
    nombre: 'Bolso1',
    imageURL: 'https://arandu.com.ar/media/2020/06/12681P.jpg',
    cantidad: 5,
    precio: 5500,
    categoria: 'bolsos',
    descripcion: 'Detalle de producto'
},
{
    id: '10',
    nombre: 'Bolso2',
    imageURL: 'https://http2.mlstatic.com/D_NQ_NP_953498-MLA69618212463_052023-O.webp',
    cantidad: 5,
    precio: 4500,
    categoria: 'bolsos',
    descripcion: 'Detalle de producto'
},
{
    id: '11',
    nombre: 'Cinto1',
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZJdgjGb8-0baAnh1XGsI9I3bMWHk-lzq_eg&usqp=CAU',
    cantidad: 10,
    precio: 2000,
    categoria: 'cintos',
    descripcion: 'Detalle de producto'
},
{
    id: '12',
    nombre: 'Cinto2',
    imageURL: 'https://d161wnnmtvsq6z.cloudfront.net/web-experto/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdkVvIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--09b71b08a14dfdf7b761c53666df9021a9b9aba9/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTWpRd2VESTBNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--452af92e7f42cff4d6ff9ff01b09430ce3f006e4/1640024174-09-h2.jpg',
    cantidad: 15,
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

export const toMayuscula = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}