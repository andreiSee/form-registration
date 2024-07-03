import { useState } from 'react';
import Focus from '../Focus.tsx';
import { H2 } from '../HtmlTags.tsx';
import Modal from '../Modal.tsx';

const techStackList = [
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
          <H2>Tech Stack</H2>
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
