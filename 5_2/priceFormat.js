function formatPrice(product) {
    const formattedPrice = product.price * 1.23;
    return `${product.name}: ${formattedPrice.toFixed(2)} PLN`;
}

const product = { name: 'Laptop', price: 3000 };
console.log(formatPrice(product));