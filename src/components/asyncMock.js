const products = [
    {
        id: '1',
        name: 'iphone 12',
        price: 1000,
        category: 'celular',
        img:'https://itechstore.com.ar/wp-content/uploads/2020/06/iphone-12-pro-gold-hero-600x710.png', 
        stock: 20, 
        description:'Descripcion de Iphone 12'
    },
    { 
        id: '2',
        name: 'samsung s21', 
        price: 800, 
        category: 'celular', 
        img:'https://cdn.pocket-lint.com/r/s/1200x630/assets/images/155378-phones-review-hands-on-samsung-galaxy-s21-ultra-image1-luae09ici4.JPG', 
        stock: 16, 
        description:'Descripcion de Samsung s21'
    },
    { 
        id: '3', 
        name: 'Ipad 8va generacion', 
        price: 1200, 
        category: 'tablet', 
        img:'https://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw', 
        stock: 10, 
        description:'Descripcion de Ipad'
    },
    { 
        id: '4', 
        name: 'Notebook Lenovo 15,6"', 
        price: 350, 
        category: 'notebook', 
        img:'https://images.fravega.com/f500/dd73afa92f9434de40d323ea2c74652f.jpg', 
        stock: 10, 
        description:'Celeron 500GB 4GB IP3-81WQ00KUAR'
    },
    { 
        id: '5', 
        name: 'Canon Eos', 
        price: 720, 
        category: 'camaras', 
        img:'https://images.fravega.com/f500/a94c3ea9f37fcdb6676b2414cab6195f.jpg', 
        stock: 10, 
        description:'Rebel T7 Dslr Color Negro'
    },
    { 
        id: '6', 
        name: 'Smart TV 4K UHD Samsung 50"', 
        price: 560, 
        category: 'televisores', 
        img:'https://images.fravega.com/f500/d7ca24bf5639a7db78c31aa9fa963be8.jpg', 
        stock: 15, 
        description:'UN50AU7000'
    }
]



export const getProducts = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 1000)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}