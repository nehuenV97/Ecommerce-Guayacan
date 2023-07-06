const products = [{
    id: 1,
    nombre: 'Piluso1',
    imageURL: 'https://cdn-xiaomi.waugi.com.ar/937-thickbox_default/smart-tv-xiaomi-mi-tv-p1-43-4k-android-dolby-vision-y-audio.jpg',
    cantidad: 10,
    precio: 1500,
    categoria: 'pilusos'
},
{
    id: 2,
    nombre: 'Piluso2',
    imageURL: 'https://cdn-xiaomi.waugi.com.ar/937-thickbox_default/smart-tv-xiaomi-mi-tv-p1-43-4k-android-dolby-vision-y-audio.jpg',
    cantidad: 10,
    precio: 3000,
    categoria: 'pilusos'
},
{
    id: 3,
    nombre: 'Bolso1',
    imageURL: 'https://cdn-xiaomi.waugi.com.ar/937-thickbox_default/smart-tv-xiaomi-mi-tv-p1-43-4k-android-dolby-vision-y-audio.jpg',
    cantidad: 10,
    precio: 5500,
    categoria: 'bolsos'
},
{
    id: 4,
    nombre: 'Bolso2',
    imageURL: 'https://cdn-xiaomi.waugi.com.ar/937-thickbox_default/smart-tv-xiaomi-mi-tv-p1-43-4k-android-dolby-vision-y-audio.jpg',
    cantidad: 10,
    precio: 4500,
    categoria: 'bolsos'
},
{
    id: 5,
    nombre: 'Cinto1',
    imageURL: 'https://cdn-xiaomi.waugi.com.ar/937-thickbox_default/smart-tv-xiaomi-mi-tv-p1-43-4k-android-dolby-vision-y-audio.jpg',
    cantidad: 10,
    precio: 2000,
    categoria: 'cintos'
},
{
    id: 6,
    nombre: 'Cinto2',
    imageURL: 'https://cdn-xiaomi.waugi.com.ar/937-thickbox_default/smart-tv-xiaomi-mi-tv-p1-43-4k-android-dolby-vision-y-audio.jpg',
    cantidad: 10,
    precio: 4500,
    categoria: 'cintos'
}]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2000)
    })    
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 2000)
    })
}