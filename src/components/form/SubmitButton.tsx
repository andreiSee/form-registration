interface Props {
  formSubmit: boolean;
  isValid: boolean;
}

const SubmitButton = ({ formSubmit, isValid }: Props) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`top-[2px]
                absolute
                w-full
                rounded-lg
                py-2
                text-lg
                bg-[var(--color-valid)]
                text-white
                text-center
                transition-all duration-200
                ${
                  formSubmit
                    ? ' left-0 transition- duration-700'
                    : ' -left-full'
                }`}
      >
        Daten erfolgreich Versendet
      </div>
      <button
        tabIndex={0}
        className="border-2
                w-full
                text-lg
                rounded-lg
                p-2
                transition-all
                duration-500
                hover:bg-gray-200 
                hover:border-gray-600"
        type="submit"
      >
        Absenden
        {!isValid && (
          <span className="text-sm">
            <br />
            (Bitte alle notwendigen Felder ausfüllen)
          </span>
        )}
      </button>
    </div>
  );
};

export default SubmitButton;
