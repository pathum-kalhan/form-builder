import './App.css';
import SampleFrom from './SampleForm';
import { FormProvider } from './context/FormContext';

const App = () => {
  return (
    <FormProvider>
      <SampleFrom />
    </FormProvider>
  );
};

export default App;
