import React from 'react'
import Modal from 'react-modal'

const customStyles = {
content : {
top                   : '50%',
left                  : '50%',
right                 : 'auto',
bottom                : 'auto',
marginRight           : '-50%',
transform             : 'translate(-50%, -50%)'
}
}
class ModalComp extends React.Component {
    constructor(props) {
        super(props)
        this.openModal = this.openModal.bind(this)
        this.afterOpenModal = this.afterOpenModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.state = {
          modalIsOpen: false,
        }
    }
        openModal() {
            this.setState({modalIsOpen: true});
          }

          afterOpenModal() {
            // references are now sync'd and can be accessed.
            this.refs.subtitle.style.color = '#f00';
          }

          closeModal() {
            this.setState({modalIsOpen: false});
          }

    render() {
      return (
          <div className="container">
          <Modal
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
          </Modal>
          </div>
          )
}
}

export default ModalComp
