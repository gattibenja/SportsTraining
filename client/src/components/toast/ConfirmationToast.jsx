import React from "react";
import styled from "styled-components";

const ToastWrapper = styled.div`
  background: rgba(28, 28, 30, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: var(--txt);
  padding: 16px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 10px;
  min-width: 300px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  z-index: 1000;

  @media (max-width: 768px) {
    min-width: 0;
    width: 90vw;
    max-width: 350px;
    padding: 14px;
  }
`;

const Message = styled.span`
  text-align: center;
  display: block;
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`;

const Button = styled.button`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--txt);
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s ease, border 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
  }
`;

const ConfirmButton = styled(Button)`
  background: #e53e3e;
  color: white;
  border: none;

  &:hover {
    background: #c53030;
  }
`;

const ConfirmationToast = ({ message, onConfirm, onCancel }) => {
  //COMPONENTE DE TOAST TIPO INFORMACION CON LOS PROPS QUE SE LE PASAN EN ToastContainer
  return (
    <ToastWrapper>
      <Message>{message}</Message>
      <ButtonWrapper>
        <Button onClick={onCancel}>Cancelar</Button>
        <ConfirmButton onClick={onConfirm}>Confirmar</ConfirmButton>
      </ButtonWrapper>
    </ToastWrapper>
  );
};

export default ConfirmationToast;
