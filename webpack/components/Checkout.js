import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Accordion, Panel } from 'react-bootstrap'
import CartItem from './CartItem'

class Checkout extends React.Component {
    constructor(props) {
        super(props)
        this.fetchCartItems = this.fetchCartItems.bind(this)
        this.clearToken = this.clearToken.bind(this)
        this.state = {
            cartItems: {
                line_items: []
            }
        }
    }
    componentDidMount() {
        this.fetchCartItems()
    }

    fetchCartItems(){
        console.log(sessionStorage.getItem('token'))
        fetch('/api/carts/id?token=' + sessionStorage.getItem('token'))
        .then(response => response.json())
        // .then(response => console.log(response))
        .then(response => this.setState({cartItems: response}))
    }

    clearToken() {
        sessionStorage.clear()
    }


    render() {
        var cart = this.state.cartItems.line_items.map((data, i) => {
            return <CartItem data={data} key={i} />
        })
        var open = 3
        return <div>
        <div className="row borderHeader">
            <Header />
        </div>
        <div className="container">
            <div className="row">
                <div className="checkoutContainer">
                    <h1 className="headerText">Your Cart</h1>
                    {cart}
                </div>
            </div>
        </div>
            <div className="checkoutFooter">
                <Accordion>
                    <Panel header="One - Personal" eventKey='1'>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                   <label htmlFor="first_name">First Name</label>
                                   <input type="text" id="first_name" name="first_name" className="form-control" placeholder="John" required />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                   <label htmlFor="last_name">Last Name</label>
                                   <input type="text" id="last_name" name="last_name" className="form-control" placeholder="Smith" required />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                  <label htmlFor="email">Email Address</label>
                                  <input type="email" className="form-control" id="email" name="email" placeholder="john.smith@example.com" required />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                  <label htmlFor="phone_number">Phone Number</label>
                                  <input type="text" className="form-control" id="phone_number" name="phone_number" maxLength="12" placeholder="555-555-5555" required />
                                </div>
                            </div>
                        </div>
                    </Panel>
                    <Panel header="Two - Shipping" eventKey='2'>
                        <div className="panel-body">
                          <div className="row">
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label htmlFor="shipping_street">Street</label>
                                <input type="text" id="shipping_street" name="Street" className="form-control" placeholder="Street" required />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label htmlFor="shipping_city">City</label>
                                <input type="text" id="shipping_city" name="City" className="form-control" placeholder="City" required />
                              </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                              <div className="form-group">
                                <label htmlFor="shipping_state">State</label>
                                <select className="form-control" id="shipping_state" name="State">
                                  <option value="NA">Select</option>
                                  <option value="IN">Indiana</option>
                                  <option value="OH">Ohio</option>
                                  <option value="KY">Kentucky</option>
                                  <option value="MI">Michigan</option>
                                  <option value="IL">Illinois</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="form-group">
                                <label htmlFor="shipping_zip">Zip Code</label>
                                <input type="text" id="shipping_zip" name="Zip Code" className="form-control" placeholder="Zip Code" required />
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="form-group">
                                <label htmlFor="shipping_country">Country</label>
                                <select className="form-control" id="shipping_country" name="Country">
                                  <option value="NA">Select</option>
                                  <option value="US">United States</option>
                                  <option value="CA">Canada</option>
                                  <option value="MX">Mexico</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                    </Panel>
                    <Panel header="Three - Billing" eventKey={open}>
                        <div className="container panel-body">
                        <div className="row">
                            <div className="col-sm-12">
                            {/* <form action="/charges" method="POST">
                               <div id="card_errors"></div>
                               <label className="amount">
                                 <span>price</span>
                               </label>
                               <input type="hidden" name="id" value="1" />
                               <script src="https://checkout.stripe.com/checkout.js" className="stripe-button"
                                       data-key="pk_test_TuopTMLRVTMYbCNKibZCiGH8"
                                       data-description="This awesome photo!"
                                       data-amount="500"
                                       data-locale="auto"></script>
                            </form> */}
                            </div>
                        </div>
                            <div className="row">
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label htmlFor="billing_street">Street</label>
                                    <input type="text" id="billing_street" name="Street" className="form-control" placeholder="Street" required />
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label htmlFor="billing_city">City</label>
                                    <input type="text" id="billing_city" name="City" className="form-control" placeholder="City" required />
                                  </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4">
                                  <div className="form-group">
                                    <label htmlFor="billing_state">State</label>
                                    <select className="form-control" id="billing_state" name="State">
                                      <option value="NA">Select</option>
                                      <option value="IN">Indiana</option>
                                      <option value="OH">Ohio</option>
                                      <option value="KY">Kentucky</option>
                                      <option value="MI">Michigan</option>
                                      <option value="IL">Illinois</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-sm-4">
                                  <div className="form-group">
                                    <label htmlFor="billing_zip">Zip Code</label>
                                    <input type="text" id="billing_zip" name="Zip Code" className="form-control" placeholder="Zip Code" required />
                                  </div>
                                </div>
                                <div className="col-sm-4">
                                  <div className="form-group">
                                    <label htmlFor="billing_country">Country</label>
                                    <select className="form-control" id="billing_country" name="Country">
                                      <option value="NA">Select</option>
                                      <option value="US">United States</option>
                                      <option value="CA">Canada</option>
                                      <option value="MX">Mexico</option>
                                    </select>
                                  </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                <button className="cart_btn btn-lg btn-default pull-right" onClick={this.clearToken}>Confirm Purchase</button>
                                </div>
                            </div>
                        </div>
                    </Panel>
                </Accordion>
                <div className="container-fluid">
                    <div className="row">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Checkout
