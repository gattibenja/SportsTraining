import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px 16px; /* ✅ BASE */
  gap: 12px;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.03),
    rgba(255, 255, 255, 0)
  );

  border-top: 1px solid var(--border);

  @media (min-width: 1200px) {
    padding: 18px 0;
    gap: 14px;
  }
`;

export const ContainerLinks = styled.div`
  display: flex;
  flex-direction: column; /* ✅ mobile */
  align-items: center;
  justify-content: center;
  gap: 15px;

  max-width: 1200px;
  width: 100%;
  font-size: 14px;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row; /* ✅ desktop */
    justify-content: space-between; /* Separación entre elementos */
  }
`;

export const Link = styled.a`
  font-size: 14px;
  color: var(--primary);
  transition: 0.15s all;
  text-decoration: none;
  font-weight: 600;
  white-space: nowrap;

  &:hover {
    color: #5ab3ff;
    opacity: 0.8;
  }
`;

export const Copyright = styled.div`
  color: var(--muted);
  font-size: 12px;
  text-align: center;

  @media (min-width: 1200px) {
    font-size: 13px;
  }
`;
