/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export function FormProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);
  const toggleForm = () => setIsOpen((prev) => !prev);

  return (
    <FormContext.Provider value={{ isOpen, openForm, closeForm, toggleForm }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  return useContext(FormContext);
}
