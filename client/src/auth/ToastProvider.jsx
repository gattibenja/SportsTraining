import React, { useState, useCallback } from "react";
import { ToastContext } from "./ToastContext";
import ToastContainer from "../components/toast/ToastContainer";

export const ToastProvider = ({ children }) => {
  //EL PROVIDER SE ENCARGA DE GUARDAR LOS ESTADOS GLOBALES PARA TODA LA APP Y TODA LA LOGICA
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = "info") => {
    const id = Date.now() + Math.random();
    setToasts((prevToasts) => [...prevToasts, { id, message, type }]);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  const addConfirmationToast = useCallback(
    (message, onConfirm) => {
      const id = Date.now() + Math.random();
      const newToast = {
        id,
        message,
        type: "confirmation",
        onConfirm: () => {
          onConfirm();
          removeToast(id);
        },
        onCancel: () => removeToast(id),
      };
      setToasts((prevToasts) => [...prevToasts, newToast]);
    },
    [removeToast]
  );

  const value = {
    addToast,
    removeToast,
    addConfirmationToast,
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />{" "}
      {/*LLAMO AL CONTENEDOR DE TOASTS PASANDOLE COMO PROP TODOS LOS TOASTS Y LA FUNCION DE REMOVER TOASTS*/}
    </ToastContext.Provider>
  );
};
