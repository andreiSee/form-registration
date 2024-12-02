import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { useRef, useState, useEffect } from 'react';

interface Props {
  formSubmit: boolean;
  isValid: boolean;
  touchedFieldsCount: number;
}

const SubmitButton = ({ formSubmit, isValid, touchedFieldsCount }: Props) => {
  const success = useRef<HTMLDivElement | null>(null);
  const [showSubmit, setShowSubmit] = useState(false);

  useEffect(() => {
    if (formSubmit) {
      setShowSubmit(true);
      setTimeout(() => {
        success?.current?.focus();
      }, 0);
    }
  }, [formSubmit]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={success}
        tabIndex={-1}
        className={`top-[2px]
                absolute
                w-full
                rounded-lg
                py-2
                text-lg
                bg-[var(--color-valid)]
                text-white
                text-center
                focus:outline-0
                focus-within:outline-0
                left-0
                ${showSubmit ? 'block' : 'hidden'}`}
      >
        Daten erfolgreich Versendet
      </div>
      <button
        tabIndex={0}
        className={`border-2
                w-full
                text-lg
                rounded-lg
                p-2
                transition-all
                duration-500
                hover:bg-gray-100 
                hover:border-gray-600
                ${
                  !isValid && touchedFieldsCount > 0
                    ? 'text-[var(--color-error)]'
                    : ''
                }`}
        type="submit"
      >
        Absenden
        {!isValid && touchedFieldsCount > 0 && (
          <div className="flex justify-center mt-2">
            <InformationCircleIcon className="size-6 mr-2" />
            <span className="text-sm mt-[2px]">
              Das Formular enthält Fehler.{' '}
              <span className="visually-hidden">
                Bestätige, um deine Daten zu korrigieren.
              </span>
            </span>
          </div>
        )}
      </button>
    </div>
  );
};

export default SubmitButton;
