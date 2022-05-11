import React, { createContext, Component } from 'react'

export const CartShowOrHideContext = createContext();

class CartShowOrHideContextProvider extends Component {

    state = {
        cartIsVisible: false,
        cart:{},
        SubTotal:0        
    }

    toggleCartVisibility = ()=>{
        this.setState({cartIsVisible: !this.state.cartIsVisible})
    }

    SetUpdatedCart = (mCart)=>{
        this.setState({cart: mCart})
    }

    RemoveItemFromCart = (key)=>{
        let mCart = this.state.cart;
        delete mCart[key];
        this.SetUpdatedCart(mCart)
        this.SetSubTotal();
    }

    SetSubTotal = ()=>{
        let subtotal = 0
        for (let item in this.state.cart) {
            subtotal += this.state.cart[item].Quantity * this.state.cart[item].Price;
        }
        this.setState({SubTotal: subtotal})
    }


    render() {
        return (
            <CartShowOrHideContext.Provider value={{ ...this.state, toggleCartVisibility: this.toggleCartVisibility, SetUpdatedCart: this.SetUpdatedCart, SetSubTotal:this.SetSubTotal, RemoveItemFromCart: this.RemoveItemFromCart }}>
                {this.props.children}
            </CartShowOrHideContext.Provider>
        )
    }
}


export default CartShowOrHideContextProvider
