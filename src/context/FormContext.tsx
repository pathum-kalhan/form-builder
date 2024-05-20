import React, { createContext, useState } from 'react';

interface FormContextType {
  data: any;
  setData: (data: any) => void;
}

export const FormContext = createContext<FormContextType>({
  data: {},
  setData: () => {},
});
const initialData = {
  name: 'Send email to pathum',
  description: 'Confirm if you have passed the subject\nHereby ...',
  done: true,
  recurrence: 'Daily',
  rating: 3,
};
export const FormProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<any>(initialData);

  return (
    <FormContext.Provider value={{ data, setData }}>
      {children}
    </FormContext.Provider>
  );
};
