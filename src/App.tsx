import { Link } from 'react-router-dom';
import Focus from './components/Focus';
import { H1 } from './components/HtmlTags';

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-12 min-h-screen">
      <div
        className="flex-auto
          min-h-full
          lg:bg-gradient-to-r
          from-gray-300
          from-[0%]
          to-[100%]"
      ></div>
      <div className="flex flex-col w-[80%] md:w-[550px]">
        <header className="flex self-center justify-center w-full mt-14">
          <Focus>
            <Link to={'/'}>
              <H1>
                <span className="text-gray-500">Demo:</span> Registrierung
              </H1>
            </Link>
          </Focus>
        </header>
        <main className="self-center mt-4">{children}</main>
        <footer className="self-center pt-14 pb-14">
          <div
            className="flex
              gap-3
              justify-center
              h-fit
              p-6"
          >
            <Focus>
              <Link
                to={'/'}
                className="transition-all hover:opacity-[0.6] inline-block"
              >
                Home
              </Link>
            </Focus>
            <Focus>
              <Link
                to={'/imprint'}
                className="transition-all hover:opacity-[0.6] inline-block"
              >
                Impressum
              </Link>
            </Focus>
            <Focus>
              <Link
                to={'/dpd'}
                className="transition-all hover:opacity-[0.6] inline-block"
              >
                Datenschutz
              </Link>
            </Focus>
          </div>
          <div className="flex justify-center gap-6 pb-6 items-center">
            <img
              alt="erecht24 Agentur-Siegel"
              src="/erecht24-agentur-siegel-dark-190x80.png"
            />
            <img alt="exali Siegel" src="/siegel_exali_72x80.png" />
          </div>
          <p className="text-xs text-center pb-12">
            Copyright © 2024 – andreiSee
          </p>
        </footer>
      </div>
      <div
        className="flex-auto
          min-h-full
          lg:bg-gradient-to-l
          from-gray-300
          from-[0%]
          to-[100%]"
      ></div>
    </div>
  );
};

export default App;
