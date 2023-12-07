import { CustomError } from "../error/customError";
import { Order, OrderDB, toModelOrders } from "../model/order";
import { Product, ProductDB, toModelProduct } from "../model/product";

export class Database {
    public async findOrders(): Promise<Order[]> {
        const orders:OrderDB[] = require("./data/orders.json")
        const result = orders.map(order => toModelOrders(order))
        return result
    }

    public async findProductById(id:number): Promise<Product> {
        const products: ProductDB[] = require("./data/products.json")
        const selectedProduct = products.find(i=> i.id === id)

        if(!selectedProduct){
            throw new CustomError("Product not found", 404)
        }

        return toModelProduct(selectedProduct)
    }
}