import React from 'react'
import './BurgerIngredients.css'

const BurgerIngredients = (props) => {

    let ingredient = null;
    console.log(props.type)

    switch (props.type) {
        case ('bread-bottom'):
            ingredient = <div className='BreadBottom'></div>
            break;
        // case ('bread-top'):
        //     ingredient = <div className={classes.BreadTop}></div>
        //     break;
        // case ('salad'):
        //     ingredient = <div className={classes.Salad}></div>
        //     break;
        // case ('bacon'):
        //     ingredient = <div className={classes.Bacon}></div>
        //     break;
        // case ('cheese'):
        //     ingredient = <div className={classes.Cheese}></div>
        //     break;
        // case ('meat'):
        //     ingredient = <div className={classes.Meat}></div>
        //     break;
        default:
            ingredient= null;
    }
    return ingredient
}
export default BurgerIngredients;