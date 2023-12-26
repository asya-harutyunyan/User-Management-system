"use client";
import { FC } from "react";
import classes from "./index.module.css";

type ModalProps = {
  modalClose: (choose: boolean) => void;
  confirm: (id: any) => void;
  userId: string | null;
};

const Modal: FC<ModalProps> = ({ modalClose, confirm, userId }) => {
  return (
    <div className={classes.modal_container}>
      <div className={classes.modal}>
        <h3 className={classes.title}>
          Are you sure you want to delete this user?
        </h3>
        <div className={classes.buttons}>
          <button
            className={classes.confirm_button}
            onClick={() => confirm(userId)}
          >
            Yes
          </button>

          <button
            className={classes.cancel_button}
            onClick={() => modalClose(false)}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
