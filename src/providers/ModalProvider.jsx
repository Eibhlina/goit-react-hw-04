import ModalContext from "../context/ModalContext";

export default function ModalProvider({ children }) {
  return <ModalContext.Provider value={{}}>{children}</ModalContext.Provider>;
}
