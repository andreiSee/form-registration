import { ScrollRestoration } from 'react-router-dom';
import App from '../App';
import Form from '../components/form/Form';

const FormPage = () => {
  return (
    <App>
      <>
        <ScrollRestoration />
        <Form />
      </>
    </App>
  );
};

export default FormPage;
