import React from 'react'
import ReactDOM from 'react-dom'

class CartItem extends React.Component {
    constructor(props) {
        super(props)
        this.deleteCartItems = this.deleteCartItems.bind(this)
  }

    deleteCartItems() {
        console.log(this.props.data.id)
        var formData = new FormData()
            formData.append('item_id', this.props.data.id)
            formData.append('quantity', 1)

        fetch('/api/carts/id?token=' + sessionStorage.getItem('token'), {
            body: formData,
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(response => this.setState({cartItems: response}))
        // .then(response => console.log(response))
    }

    render() {
        var price = '$' + (this.props.data.item.price)/100 + '.00'
        return <div>
        <div className=" row cart_item_container">
            <div className="col-sm-4">
                <img src={this.props.data.item.image} alt='a nice photo here' className='img-responsive' />
            </div>
            <div className="col-sm-4 cart_item_text">
                <strong>{this.props.data.item.product}</strong><br/>
                <div className="headerText"><strong>{price}</strong></div><br/>
                {this.props.data.item.description}
            </div>
            <div className="col-sm-4">
                <button className="btn btn-default" onClick={this.deleteCartItems}>Delete</button>
            </div>
        </div>
        <hr/>
        </div>
    }
}

export default CartItem
