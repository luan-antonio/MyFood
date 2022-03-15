import ReactDOM from "react-dom";
import { Fragment } from "react";

import * as S from "./styles";

import Backdrop from "../Backdrop";

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  const modalClickHandler = (e) => {
    e.stopPropagation();
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose}>
          <S.Modal onClick={modalClickHandler}>{props.children}</S.Modal>
        </Backdrop>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
