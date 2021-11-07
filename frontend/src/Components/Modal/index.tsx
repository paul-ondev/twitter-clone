import React, { useEffect } from "react";

import "../Modal/Modal.scss";
import IconButton from "../Button/IconButton";
import classNames from "classnames";

interface ModalProps {
  open: boolean;
  closeModal: () => void;
  outsideClose?: boolean;
  children: React.ReactNode;
  topChildren?: React.ReactNode;
  bottomChildren?: React.ReactNode;
  className?: string;
}

const Modal = ({
  open,
  closeModal,
  outsideClose = true,
  children,
  topChildren,
  bottomChildren,
  className,
}: ModalProps) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }
    if (!open) {
      document.body.style.overflow = "visible";
    }
  }, [open]);

  const HandleBackdropClick = (out: boolean) => {
    if (out) {
      return closeModal;
    } else {
      return undefined;
    }
  };

  return (
    <>
      {open && (
        <div className="modalWrapper">
          <div
            onClick={HandleBackdropClick(outsideClose)}
            className="modalWindowBackdrop"
          ></div>
          <div
            className={classNames("modalWindow", {
              [`${className}`]: className || false,
            })}
          >
            <div className="modalWindow__top">
              <span className="modalWindow__closeIcon">
                <IconButton onClick={closeModal}>
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  >
                    <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" />
                  </svg>
                </IconButton>
              </span>
              {topChildren}
            </div>
            <main className="modalWindow__main">{children}</main>
            {bottomChildren && (
              <div className="modalWindow__bottom">{bottomChildren}</div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
