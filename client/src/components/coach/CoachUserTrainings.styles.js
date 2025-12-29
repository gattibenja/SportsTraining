import styled from 'styled-components';

export const HeaderWrap = styled.div`
  display:flex;
  gap:12px;
  align-items:center;
  flex-wrap:wrap;
`;

export const AthleteInfo = styled.div`
  display:flex;
  flex-direction:column;
`;

export const Name = styled.h3`
  margin:0;
  font-size:1.05rem;
`;

export const Meta = styled.div`
  color:var(--muted);
  font-size:13px;
`;

export const CompactBox = styled.div`
  min-width:340px;
`;

export const HeaderTop = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:12px;
`;

export const LeftWrap = styled.div`
  display:flex;
  gap:12px;
  align-items:center;
`;

export const ActionsWrap = styled.div`
  display:flex;
  gap:8px;
  align-items:center;
`;

export const GridWrapper = styled.div`
  margin-top: 10px;
`;

export const ModalLarge = styled.div`
  max-width: 900px;
  width: 100%;
`;

export default {};
