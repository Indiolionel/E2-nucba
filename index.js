const pizzas = [];

class Pizza {
    constructor(id,nombre,ingredientes,precio) {
        this.id = id,
        this.nombre = nombre,
        this.ingredientes=[ingredientes],
        this.precio= precio
    }
    
}

const pizzaMuzza = new Pizza(1,"muzza",["muzzarella", "aceitunas"],554);
const pizzaRoquefort = new Pizza(2,"roquefort",["roquefort", "muzzarella","aceitunas"],854);
const pizzaCuatroQ = new Pizza(3,"4 quesos",["roquefort", "muzzarella","chedar","gouda","aceitunas"],1154);
const pizzaAnana = new Pizza(4,"anana",["anana", "muzzarella","aceitunas"],954);
const pizzaCalabresa = new Pizza(5,"calabresa",["calabresa", "muzzarella","aceitunas negras"],854);
const pizzaAnchoas = new Pizza(6,"anchoas",["anchoas", "muzzarella","aceitunas negras"],654);



// pizzas.push(pizzaMuzza,pizzaRoquefort)
pizzas.push(pizzaMuzza,pizzaRoquefort,pizzaAnchoas,pizzaCuatroQ,pizzaCalabresa,pizzaAnana)

const itemA = pizzas.filter((e)=> e.id %2 !== 0)
const itemB = pizzas.find(e=> e.precio<600)

console.log(itemA)
console.log(`Pizza OFERTA: ${itemB.nombre} cuesta ${itemB.precio} pesos`)
const itemC = pizzas.forEach(e => console.log(e.nombre))
const itemD = pizzas.forEach(e => console.log(e.precio))

const  itemE= pizzas.forEach(e => console.log(`La pizza ${e.nombre} tiene un precio de ${e.precio}`))
