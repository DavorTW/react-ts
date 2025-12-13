import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
    productName: string;
    quantity: number;
}

const itemsInCart: ItemInCart[] = [
    {productName: 'Nintendo Switch', quantity: 1},
    {productName: 'Pro controller', quantity: 2},
    {productName: 'Super Smash', quantity: 1},
];

export function FirstStepsApp() {


    return (
        <>
            <h1>Carrito de compras</h1>

            {itemsInCart.map(({productName, quantity}) => {
               return <ItemCounter key={productName} name={productName} quantity={quantity}></ItemCounter>
            })}

            {/* <ItemCounter name="Nintendo Switch 2" quantity={2}></ItemCounter>
            <ItemCounter name="Pro Controller" quantity={1}></ItemCounter>
            <ItemCounter name="Super Smash" quantity={1}></ItemCounter> */}
        </>
    );
}