import { useRouteError, useNavigate } from 'react-router-dom';
import App from '../App';
import { H1, P } from '../components/HtmlTags';

interface RouteError {
  statusText?: string;
  message?: string;
}

export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError() as RouteError;

  return (
    <App>
      <div id="error-page">
        <H1>Oops!</H1>
        <P>Sorry, something went wrong.</P>
        <P>
          <i>{error.statusText || error.message}</i>
        </P>
        <P>
          <a className="cursor-pointer" onClick={() => navigate(-1)}>
            &larr; Go back
          </a>
        </P>
      </div>
    </App>
  );
}
