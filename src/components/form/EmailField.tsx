import { CheckMark, RegistrationData } from './Form';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';

interface Props {
  currentFieldState: (
    fieldname: keyof RegistrationData
  ) => 'valid' | 'error' | undefined;
  register: UseFormRegisterReturn;
  error: FieldError | undefined;
  fieldName: keyof RegistrationData;
}

const EmailField = ({
  currentFieldState,
  register,
  error,
  fieldName,
}: Props) => {
  return (
    <div className="flex">
      <input
        className={`${
          currentFieldState(fieldName) === 'valid'
            ? 'border-[var(--color-valid)]'
            : currentFieldState(fieldName) == 'error'
            ? 'border-[var(--color-error)]'
            : 'border-[var(--color-border)]'
        }
          border-2
          rounded-lg
          w-full
          py-1
          px-2
          justify-self-end`}
        type="email"
        id={fieldName}
        {...register}
        aria-invalid={error ? 'true' : 'false'}
        autoComplete="on"
        maxLength={255}
      />
      {currentFieldState(fieldName) === 'valid' && (
        <CheckMark fieldname={fieldName} />
      )}
    </div>
  );
};

export default EmailField;
