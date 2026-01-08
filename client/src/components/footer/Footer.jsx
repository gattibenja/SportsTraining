import React from "react";
import * as S from "./footer";

export default function Footer() {
  return (
    <>
      <S.Container>
        <S.ContainerLinks>
          <div className="text-[0.7rem]">
            <span className="text-emerald-400 font-bold">{"</>"} </span>
            <span className="text-gray-500">{"Desarrollado por"} </span>
            <strong className="text-emerald-400 font-black">
              Benjamin Pablo Gatti
            </strong>
          </div>

          <S.Copyright>
            © 2026 CASST. Todos los derechos reservados.
          </S.Copyright>
        </S.ContainerLinks>
      </S.Container>
    </>
  );
}
