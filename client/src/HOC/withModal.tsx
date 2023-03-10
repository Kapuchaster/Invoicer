import { createContext, ReactElement, useState } from "react";
import Modal from "../components/organisms/modal";

interface ModalContextProps {
  open: (content: JSX.Element) => void;
  close: () => void;
}

export const ModalContext = createContext<ModalContextProps>({
  open: () => {},
  close: () => {},
});

export const withModalContext = (Component: ReactElement) => () => {
  const [hasContent, setContent] = useState<JSX.Element | undefined>();

  const handleClose = () => {
    setContent(undefined);
  };

  const initValue = { open: setContent, close: handleClose };

  return (
    <ModalContext.Provider value={initValue}>
      <>
        {Component}
        <Modal content={hasContent} onClose={handleClose} />
      </>
    </ModalContext.Provider>
  );
};
