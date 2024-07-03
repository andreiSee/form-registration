import { useEffect, useRef } from 'react';
import { H2 } from './HtmlTags';

const Modal = ({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const modalRef = useRef(null);
  const focusableElementRef = useRef(null);

  useEffect(() => {
    const modal: HTMLDivElement | null = modalRef.current;
    if (modal) {
      // @ts-expect-error Never code error
      const focusableElement = modal.querySelector('button');

      const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === 'Escape') {
          setShowModal(!showModal);
        }

        // Focus trab
        if (event.key === 'Tab') {
          event.preventDefault();
          focusableElement.focus();
        }
      };

      if (showModal) {
        document.body.style.overflow = 'hidden'; // Disable scrolling on the rest of the page
        // @ts-expect-error Never code error
        modal.addEventListener('keydown', handleKeyDown);
        focusableElement.focus();
      }

      return () => {
        document.body.style.overflow = 'auto'; // Re-enable scrolling
        // @ts-expect-error Never code error
        modal.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [showModal, setShowModal]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed
        z-[1300]
        top-0
        right-0
        bottom-0
        left-0"
    >
      <div
        onClick={() => setShowModal(!showModal)}
        tabIndex={-1}
        className="fixed
          flex
          items-center
          justify-center
          bg-[rgba(0,_0,_0,_0.5)]
          top-0
          right-0
          bottom-0
          left-0
          z-[-1]"
      ></div>
      <div
        ref={modalRef}
        tabIndex={-1}
        className="absolute
          bg-[rgba(0,_0,_0,_0.8)]
          rounded-lg
          p-3
          top-1/2
          left-1/2
          shadow-[10px_10px_40px_#cccccc]
          translate-x-[-50%]
          translate-y-[-50%]
          w-5/6
          lg:w-[900px]"
      >
        <div
          className="flex
            justify-between
            text-white
            p-4"
        >
          <H2 id="modal-title">Test Ergebnisse</H2>
          <button
            ref={focusableElementRef}
            className="cursor-pointer
              rounded-lg
              focus-within:outline
              focus-within:outline-gray-400
              focus-within:outline-2
              focus-within:outline-offset-4"
            onClick={() => setShowModal(!showModal)}
            tabIndex={0}
            aria-label="Close modal"
            type="button"
          >
            X
          </button>
        </div>
        <img
          title="Test Ergebnisse"
          alt="Test Ergebnisse"
          src="/form-tests.webp"
        />
      </div>
    </div>
  );
};

export default Modal;
