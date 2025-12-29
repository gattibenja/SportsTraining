import styled from 'styled-components';

export const Main = styled.main`
  padding-top: 20px;
`;

export const PageHeader = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  z-index: 10000;
  backdrop-filter: blur(4px);
`;

export const Modal = styled.div`
  background: var(--bg);
  border-radius: 12px;
  padding: 18px;
  max-width: 700px;
  width: 100%;
  position: relative;
  box-shadow: 0 8px 30px rgba(10,10,10,0.12);
  max-height: calc(100vh - 80px);
  overflow: auto;
`;

export const Close = styled.button`
  position: absolute;
  right: 12px;
  top: 8px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export const FormGrid = styled.form`
  display: grid;
  gap: 10px;
`;

export const Row = styled.div`
  display: flex;
  gap: 8px;
`;

export const TwoColGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`;

export const FieldLabel = styled.label`
  display: ${props => props.row ? 'flex' : 'block'};
  align-items: ${props => props.center ? 'center' : 'initial'};
  gap: ${props => props.gap || '0'};
  flex: ${props => props.flex || 'initial'};
  font-size: 0.95rem;
`;

export default {
  Main,
  PageHeader,
  ModalOverlay,
  Modal,
  Close,
  FormGrid,
  Row,
  TwoColGrid,
  Actions,
  FieldLabel
};
