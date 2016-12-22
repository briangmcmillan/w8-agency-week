import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'

class Item extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          addToCartBtn: 'Add To Cart',
        }
        this.addToCart = this.addToCart.bind(this)
        this.saveToken = this.saveToken.bind(this)
        this.switchAddToCartLabel = this.switchAddToCartLabel.bind(this)
    }

    addToCart() {
        var token = sessionStorage.getItem('token')
        var formData = new FormData()
            formData.append('item_id', this.props.data.id)
            formData.append('quantity', 1)
            formData.append('token', token)

        fetch('/addtocart', {
            body: formData,
            method: 'POST',
        })
        .then(response => response.json())
        // .then((response) => {
        //     this.saveToken(response)
        //     this.switchAddToCartLabel(response)
        // })
        .then(response => console.log(response))
    }
    //   // .then(response => console.log(response))
    //   .then(this.saveToken)
    //   .then(this.switchAddToCartLabel)
    //     this.switchAddToCartLabel()
    // }

    saveToken(response){
      console.log(response.cart_id)
      sessionStorage.setItem('token', response.cart_id)
    }

    switchAddToCartLabel() {
        this.setState({
            addToCartBtn: 'Added!'
        })

        setTimeout(() => {
            this.setState({
                addToCartBtn: 'Add To Cart'
            })
        }, 1000)
    }

    render() {
        var price = '$' + (this.props.data.price)/100 + '.00'
        return <div>
          <div className="col-sm-3">
            <img src={this.props.data.image} alt='a nice photo here' className='patchPhoto img-responsive' />
                  <div className="col-sm-6 item_info">{this.props.data.product}</div>
                  <div className="col-sm-6 headerText item_info text-right">{price}</div><br /><br />
              <button type="button" onClick={this.addToCart} className="btn cart_btn btn-block">{this.state.addToCartBtn}</button><br/>
          </div>
        </div>

        {/* modal starts */}
        {/* <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref="subtitle">Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal> */}
    }
}

export default Item
