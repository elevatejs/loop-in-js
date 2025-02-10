let products = [
    { name: 'Laptop', category: 'Electronics' },
    { name: 'T-Shirt', category: 'Clothing' },
    { name: 'Headphone', category: 'Electronics' },
    { name: 'Jeans', category: 'Clothing' }
];

let categorizedProducts = {
    electronics: [],
    clothing: []

}
for (let i = 0; i < products.length; i++) {
    let singleProduct = products[i];
    if (singleProduct.category === 'Electronics') {
        categorizedProducts.electronics.push(singleProduct.name);
    }
    else if (singleProduct.category === 'Clothing') {
        categorizedProducts.clothing.push(singleProduct.name);
    }

}
console.log(categorizedProducts);
