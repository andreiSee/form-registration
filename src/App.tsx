import { Link } from 'react-router-dom';
import Focus from './components/Focus';
import { H1 } from './components/HtmlTags';
import ScrollToTop from './components/ScrollToTop';

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center min-h-screen bg-pattern">
      <div
        className="flex-auto
          min-h-full
          md:bg-gradient-to-l
          from-white
          from-[0%]
          to-[100%]"
      ></div>
      <div className="flex justify-center md:w-[750px] bg-white">
        <div className="w-10/12">
          <header className="flex self-center justify-center w-full mt-14">
            <Focus>
              <Link to={'/'}>
                <H1>
                  <span className="text-gray-500">Demo:</span> Registrierung
                </H1>
              </Link>
            </Focus>
          </header>
          <hr className="h-[1px] my-6 w-full bg-gray-800" />
          <main className="self-center mt-4">
            {children}
            <ScrollToTop />
          </main>
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
            <div className="flex justify-center gap-6 pb-6 items-center grayscale">
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
      </div>
      <div
        className="flex-auto
          min-h-full
          md:bg-gradient-to-r
          from-white
          from-[0%]
          to-[100%]"
      ></div>
    </div>
  );
};

export default App;
