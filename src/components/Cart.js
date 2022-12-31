import React ,{ Component } from "react";

class Cart extends Component{
    clearAll = () => {
        let allItems = document.querySelector('.added-items');
        allItems.classList.add('remove-item');
        setTimeout(() => {
            allItems.innerHTML = '';
            allItems.classList.remove('remove-item');
        }, 550)
        document.getElementById('count').innerHTML = '0';
        document.getElementById('total').innerHTML = '0';
    }
    render() {
        return (
            <section className="cart" id="cart">
                <div className="added-items" id="added-items"></div>
                <div className="total">
                    <span>Total</span>
                    <span id="total">0</span>
                </div>
                <div className="btn-inner">
                    <button className="confirm">Confirm Order</button>
                    <button className="clear" onClick={this.clearAll}>Clear All</button>
                </div>
            </section>
        )
    }
}

export default Cart