import React from "react";
import AthleteDashboard from "../../components/athlete/AthleteDashboard.jsx";
import * as S from "./AthleteDashboardPage.styles.js";

export default function AthleteDashboardPage() {
  return (
    <S.Main className="container">
      <h2 className="text-center">Mi Dashboard</h2>
      <S.Content>
        <AthleteDashboard />
      </S.Content>
    </S.Main>
  );
}
