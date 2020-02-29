import React from 'react'
import Burger from '../../components/Burger/Burger'

export default class BurgerBuilder extends React.Component {
    state = {
        ingredients:{
            salad :1,
            bacon:1,
            cheese:2,
            meat:1
        }
    }

    render = () => (
        <div>
             <Burger ingredients={this.state.ingredients}/>
        </div>
    )
}