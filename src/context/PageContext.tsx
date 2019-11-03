import { createContext, useContext } from "react";

const context = createContext(null);

export const PageCustomer = context.Consumer

export const PageProvider = context.Provider

export function usePageContext() {
  return useContext(context)
}
