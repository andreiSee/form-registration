import App from '../App';
import { ScrollRestoration } from 'react-router-dom';
import conti, { EmailTypes } from '../utilities/conti';
import { useState } from 'react';
import { H1, H2, P } from '../components/HtmlTags';

const infoConti = conti(EmailTypes.Inf);

const ImprintPage = () => {
  const [{ aContiP, dContiP }] = useState(infoConti);
  return (
    <App>
      <>
        <ScrollRestoration />
        <div className="px-2">
          <H1>Impressum</H1>

          <P>
            Andrei See
            <br />
            andreiSee websolutions
            <br />
            Ziegetsdorfer Stra&szlig;e ,87
            <br />
            93051 Regensburg
          </P>

          <H2>Kontakt</H2>
          <P>
            Telefon: +4917647950551
            <br />
            E-Mail: {aContiP + dContiP}
          </P>

          <H2>Umsatzsteuer-ID</H2>
          <P>
            Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a
            Umsatzsteuergesetz:
            <br />
            DE285027472
          </P>

          <H2>Angaben zur Berufs&shy;haftpflicht&shy;versicherung</H2>
          <P>
            <strong>Name und Sitz des Versicherers:</strong>
            <br />
            exali AG - Das Versicherungsportal f&uuml;r Dienstleister und freie
            Berufe
            <br />
            Franz-Kobinger-Str. 9<br />
            86157 Augsburg
          </P>
          <P>
            <strong>Geltungsraum der Versicherung:</strong>
            <br />
            Deutschland
          </P>

          <H2>EU-Streitschlichtung</H2>
          <P>
            Die Europ&auml;ische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{' '}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </P>

          <H2>
            Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
          </H2>
          <P>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </P>
        </div>
      </>
    </App>
  );
};

export default ImprintPage;
