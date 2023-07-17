import React from "react";

import { CSSTransition } from "react-transition-group";
import Portal from "../portal/Portal";

const ModalBase = ({ visible, onClose, children, bodyClassName = "" }) => {
  const squareStyle = {
    transition: "all 250ms",
    backgroundImage:
      "linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 67.21%, rgba(255, 255, 255, 0) 100%), linear-gradient(-90deg, rgb( 255,255,255) 0%, rgb(254, 224, 21765) 50%, rgb(255,255,255) 100%)",
  };
  return (
    <>
      <CSSTransition in={visible} timeout={250} classNames="zoom" unmountOnExit>
        {(status) => (
          <Portal
            visible={status !== "exited"}
            // onClose when click in overlay from Prortal to close modal (setOpen - CloseModal on Header)
            onClose={onClose}
            containerClassName="fixed z-[9999] inset-0 flex items-center justify-center"
            bodyStyle={squareStyle}
            // class content for transition
            bodyClassName={`relative z-10 content ${bodyClassName}`}
          >
            {children}
          </Portal>
        )}
      </CSSTransition>
    </>
  );
};
export default ModalBase;
