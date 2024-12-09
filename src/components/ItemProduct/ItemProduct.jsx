export const products = [
    { id: 1,
        name: 'Escopeta del scout',
        imgSrc: '/weapons/shotguns/weapontest1.png',
        description: 'Descripción de la escopeta del scout',
        price: '1500',
        stock: 1000,
        type: 'Escopeta',
        rarity: 'Comun',
        },

    { id: 2,
        name: 'Refrescopeta',
        imgSrc: '/weapons/shotguns/weapontest2.png',
        description: 'Descripción de la refrescopeta',
        price: '4500',
        stock: 45,
        type: 'Escopeta',
        rarity: 'Poco Comun',
        },

    { id: 3,
        name: 'Retroescopeta',
        imgSrc: '/weapons/shotguns/weapontest3.png',
        description: 'Descripción de la retroescopeta',
        price: '3850',
        stock: 78,
        type: 'Escopeta',
        rarity: 'Poco comun',
        },

    { id: 4,
        name: 'E.R.R.A.D.I.C.A.D.O.R.',
        imgSrc: '/public/Weapons/pistols/weapontest4.png',
        description: 'Descripcion deL E.R.R.A.D.I.C.A.D.O.R.',
        price: '12690',
        stock: 17,
        type: 'Pistola',
        rarity: 'Raro',
        },

    { id: 5,
        name: 'Aeropistola',
        imgSrc: '/public/Weapons/pistols/weapontest5.png',
        description: 'Descripcion de la Aeropistola',
        price: '2768',
        stock: 12,
        type: 'Pistola',
        rarity: 'Raro',
        },

    { id: 6,
        name: 'Leche Mutada',
        imgSrc: '/public/Weapons/others/weapontest6.png',
        description: 'Descripcion de la Leche Mutada',
        price: '6700',
        stock: 34,
        type: 'Consumible',
        rarity: 'Comun',
        },

    { id: 7,
        name: 'CritiCola',
        imgSrc: '/public/weapons/others/weapontest7.png',
        description: 'Descripcion de la CritiCola',
        price: '500',
        stock: 56,
        type: 'Consumible',
        rarity: 'Poco Comun',
        },
        
        { id: 8,
        name: 'Exprimevacas 5000',
        imgSrc: '/public/Weapons/launchers/weapontest8.png',
        description: 'Descripcion del Exprimevacas 5000',
        price: '34500',
        stock: 10,
        type: 'Lanzallamas',
        rarity: 'Epico',
        },
];

export const getProducts = () =>{
    return new Promise((res) =>{
        setTimeout(() =>{
            res(products); 
        }, 2000);
    })
}
export const getProductById = (id) => {
    return new Promise((res) => {
        const productoFiltrado = products.find((product) => product.id === parseInt(id));
        setTimeout(() => {
            res(productoFiltrado);
        }, 500);
    });
};

export const getProductByCategory = (category) => {
    return new Promise((res) => {
        const productosFiltrados = products.filter((product) => product.category === category);
        setTimeout(() => {
            res(productosFiltrados);
        }, 500);
    });
};
