import React from 'react'
import { connect } from 'react-redux'
// import { showModal } from "../actions";
// import { hideModal } from "../actions";
// import Popup from "./popup";


class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       showModal: false
     };

     this.handleOpenModal = this.handleOpenModal.bind(this);
     this.handleCloseModal = this.handleCloseModal.bind(this);
   }

   handleOpenModal () {
     this.setState({ showModal: true });
   }

   handleCloseModal () {
     this.setState({ showModal: false });
   }

   render () {
     return (null
 			// <div>
 			// 	<button onClick={this.openModal}>
 			// 		Open modal
 			// 	</button>
      //
 			// 		<button	onClick={this.closeModal}>
 			// 			Close
 			// 		</button>
 			// </div>
     );
   }
 }

 const mapStateToProps = state => ({
   ...state.modal
 })

export default connect(mapStateToProps, null)(Modal)
