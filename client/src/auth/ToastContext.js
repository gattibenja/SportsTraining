import { createContext, useContext } from "react";

export const ToastContext = createContext(); //EL CONTEXT SE ENCARGA DE FUNCIONAR COMO HOOK PARA TODA LA APP

export const useToast = () => {
  // DESDE CUALQUIER LUGAR DE LA PAGINA IMPORTAMOS EL HOOK useToast
  return useContext(ToastContext);
};
