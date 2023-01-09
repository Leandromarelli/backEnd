class Product {
    constructor(title, description, price, thumbnail, code, stock) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }

}

class ProductManager {
    constructor() {
        this.products = [];
    }

    addId = () => {
        const addId = ( this.products.length > 0) ? this.products[ this.products.length - 1].id + 1 : 1;
        return addId;
    }

    addProduct(product) {
        if (!this.products.find((p) => p.code === product.code)) 
        {
            product['id'] = this.addId();
            this.products.push(product);
        }
    }
    getProducts() {
        return this.products;
    }

    getProductById(id) {
        if (this.products.find((p) => p.id === id)) {
            return this.products.find((p) => p.id === id);
        } else {
            return 'Not found';
        }
    }

}


const product1 = new Product("mate","de madera",1.000,"#",1,100);
const product2 = new Product("termo","de aluminio",10.000,"#",1,100);
const product3 = new Product("yerba","normal-1kg",1.000,"#",3,100);
const product4 = new Product("kit matero", "3 piezas",3.000,"#",4,100);



// Se creará una instancia de la clase “ProductManager”
const productManager = new ProductManager();
// Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
console.log(productManager.getProducts());
// Se llamará al método “addProduct”
productManager.addProduct(product1);
// Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
console.log(productManager.getProducts());
// Se llamará al método “addProduct” con los mismos campos de arriba, 
// no lo agrega porque product1 y product2 tienen mismo "id"
productManager.addProduct(product2);
console.log(productManager.getProducts());
// Se evaluará que getProductById devuelva error 'Not found' si no encuentra el producto o mostrar el producto en caso de encontrarlo
console.log(productManager.getProductById(1));
console.log(productManager.getProductById(5));