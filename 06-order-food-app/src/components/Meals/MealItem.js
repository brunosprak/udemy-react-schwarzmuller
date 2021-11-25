import React, { useContext } from 'react';

import CartContext from '../../store/cart-context';
import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';

const MealItem = props => {

    const cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = amount => {
        cartCtx.addItem({ id: props.id, price: props.price, name: props.name, description: props.description, amount: amount});
    };

    return <li className={classes.meal}>
        <div className={classes.description}>
            <h3>{props.name}</h3>
            <div>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
        </div>
    </li>;

}

export default MealItem;