import styled from 'styled-components';

export const BarRow = styled.div`
  display: grid;
  grid-template-columns: 140px 1fr 70px;
  gap: 10px;
  align-items: center;
`;

export const BarName = styled.span`
  font-size: 12px;
  color: var(--muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BarTrack = styled.div`
  height: 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--border);
  overflow: hidden;
`;

export const BarFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, rgba(74, 163, 255, 0.9), rgba(77, 255, 181, 0.75));
  width: ${props => (props.percent ? `${props.percent}%` : '0%')};
  transition: width 0.25s ease;
`;

export const BarVal = styled.span`
  font-size: 12px;
  text-align: right;
  font-weight: 600;
  color: var(--primary);
`;

