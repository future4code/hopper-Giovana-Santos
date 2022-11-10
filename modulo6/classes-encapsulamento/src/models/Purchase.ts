// type para tipar no typescript com camelCase
// export type Purchase = {
//     id: string,
//     userId: string,
//     productId: string,
//     quantity: number,
//     totalPrice: number
// }

export class Purchase {
    constructor(
       private id: string,
       private userId: string,
       private productId: string,
       private quantity: number,
       private totalPrice: number

    ){
        this.id = id,
        this.userId = userId,
        this.productId = productId,
        this.quantity = quantity,
        this.totalPrice = totalPrice
    } 
}

// type para tipar no banco de dados com snake_case
// export type PurchaseDB = {
//     id: string,
//     user_id: string,
//     product_id: string,
//     quantity: number,
//     total_price: number
// }

export class PurchaseDB {
    constructor(
       private id: string,
       private user_Id: string,
       private product_Id: string,
       private quantity: number,
       private total_Price: number

    ){
        this.id = id,
        this.user_Id = user_Id,
        this.product_Id = product_Id,
        this.quantity = quantity,
        this.total_Price = total_Price
    }
}