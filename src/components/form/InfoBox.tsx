import { useState } from 'react';
import Focus from '../Focus.tsx';
import { H2 } from '../HtmlTags.tsx';
import Modal from '../Modal.tsx';

const techStackList = [
  { title: 'A11y', url: 'https://www.w3.org/TR/WCAG22/' },
  { title: 'React', url: 'https://react.dev/' },
  { title: 'TypeScript', url: 'https://www.typescriptlang.org/' },
  { title: 'React-Hook-Form', url: 'https://react-hook-form.com/' },
  { title: 'Zod', url: 'https://zod.dev/' },
  { title: 'Tailwind', url: 'https://tailwindcss.com/' },
  { title: 'Vite', url: 'https://vitejs.dev/' },
  { title: 'Vitest', url: 'https://vitest.dev/' },
];

const InfoBox = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
      <section>
        <div className="text-center">
          <H2>
            <span className="flex justify-center gap-4">
              Tech Stack
              <Focus>
                <a
                  href="https://github.com/andreiSee/form-registration"
                  target="_blank"
                  rel="noopener"
                  title="Code on Github"
                >
                  <svg
                    height="32"
                    width="32"
                    viewBox="0 0 16 16"
                    version="1.1"
                    className="rounded-full hover:bg-gray-200 hover:shadow-[0px_0px_6px_3px_#cccccc]"
                  >
                    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                  </svg>
                </a>
              </Focus>
            </span>
          </H2>
        </div>
        <ul className="flex flex-wrap justify-center gap-4 pt-4">
          {techStackList &&
            techStackList.map((item) => (
              <ListItem item={item} key={item.title} />
            ))}
        </ul>
      </section>
      <section className="mt-12">
        <div className="text-center mb-3">
          <H2>Test Suite</H2>
        </div>
        <Focus>
          <button
            type="button"
            onClick={() => setShowModal(!showModal)}
            className="cursor-pointer
            border-4 
            rounded-md 
            border-transparent 
            hover:border-gray-400 
            transition-all 
            duration-200
            outline-none"
          >
            <img
              title="Test Ergebnisse"
              alt="Test Ergebnisse"
              src="/form-tests.webp"
            />
          </button>
        </Focus>
      </section>
    </>
  );
};

const ListItem = ({ item }: { item: { title: string; url: string } }) => {
  return (
    <li>
      <Focus>
        <a
          className="block 
          outline-none
          rounded-lg
          p-2 
          border-2
          hover:bg-gray-200 
          hover:border-gray-600 
          transition-all duration-200"
          href={item.url}
          target="_blank"
          rel="noopener"
        >
          {item.title}
        </a>
      </Focus>
    </li>
  );
};

export default InfoBox;
