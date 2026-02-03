const cart = {
    items: [],

    add(item){
        this.items.push(item)
    },

    remove(item){
        const index = this.items.indexOf(item);
        if(index > -1){
            this.items.splice(index, 1);
        }
    },

    getTotal(){
        let sum = 0;
        for(let i = 0; i < this.items.length; i++){
            sum += this.items[i].price;
        }
        return sum;
    }
}

cart.add({ name: 'Laptop', price: 3000 });
cart.add({ name: 'Mouse', price: 50 });
console.log(cart.getTotal());