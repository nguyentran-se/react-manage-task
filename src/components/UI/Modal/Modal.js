import React, { Component } from "react";
import Aux from "../../../hoc/Auxilary/Auxilary";
import classes from "./Modal.css";
import Backdrop from "../BackDrop/Backdrop";

class Modal extends Component {
   shouldComponentUpdate(nextProps, nextState) {
      return (
         nextProps.showModal !== this.props.showModal ||
         nextProps.children !== this.props.children
      );
   }
   render() {
      return (
         <Aux>
            <Backdrop
               showModal={this.props.showModal}
               clicked={this.props.modalClosed}></Backdrop>
            <div
               className={classes.Modal}
               style={{
                  // visibility: this.props.showModal ? "visible" : "hidden",
                  opacity: this.props.showModal ? 1 : 0,
                  transform: this.props.showModal
                     ? "translate(-50%, 0)"
                     : "translate(-50%, -5%)",
                  pointerEvents: this.props.showModal ? "auto" : "none",
               }}>
               {this.props.children}
            </div>
         </Aux>
      );
   }
}

export default Modal;
