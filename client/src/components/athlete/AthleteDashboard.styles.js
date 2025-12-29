import styled from 'styled-components';

export const Root = styled.div`
  background: var(--card);
  color: var(--txt);
  padding: 16px;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  max-width: 980px;
  margin: 0 auto;
`;

export const Header = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom:12px;
`;

export const Title = styled.h3`
  margin:0;
  font-size:1.15rem;
  color: var(--txt);
`;

export const Grid = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fit,minmax(140px,1fr));
  gap:12px;
`;

export const Card = styled.div`
  padding:12px;
  border-radius:10px;
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  border: 1px solid var(--border);
  text-align:center;
`;

export const Metric = styled.div`
  font-weight:700;
  font-size:1.05rem;
  color: var(--txt);
`;

export const CompactRoot = styled(Root)`
  padding: 10px;
`;

export const CompactTitle = styled(Title)`
  font-size: 1rem;
`;

export const CompactGrid = styled(Grid)`
  grid-template-columns: repeat(3,1fr);
  gap:8px;
`;

export const CompactCard = styled(Card)`
  padding:8px;
`;

export const CompactMetric = styled(Metric)`
  font-size:0.95rem;
`;

export const Label = styled.div`
  color:var(--muted);
  font-size:0.85rem;
`;

export default {};
