import React from "react";
import styled from "styled-components";
import Toast from "./Toast";
import ConfirmationToast from "./ConfirmationToast";

const ContainerWrapper = styled.div`
  position: fixed;
  top: 80px;
  right: 18px;
  z-index: 9999;
  max-width: 400px;

  @media (max-width: 768px) {
    right: 50%;
    transform: translateX(50%);
    max-width: none;
  }
`;

const ToastContainer = ({ toasts, removeToast }) => {
  // COMPONENTE QUE RENDERIZA LOS TOASTS CON EL MAP LOS CUALES SE LES PASA COMO PROP EN EL CONTEXT
  return (
    <ContainerWrapper>
      {toasts.map((toast) => {
        if (toast.type === "confirmation") {
          return (
            <ConfirmationToast
              key={toast.id}
              message={toast.message}
              onConfirm={toast.onConfirm}
              onCancel={toast.onCancel}
            />
          );
        }
        return (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        );
      })}
    </ContainerWrapper>
  );
};

export default ToastContainer;
