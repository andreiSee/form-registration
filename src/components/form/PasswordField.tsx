import { EyeSlashIcon, EyeIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
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

const PasswordField = ({
  currentFieldState,
  register,
  error,
  fieldName,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

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
          border-y-2
          border-l-2
          rounded-l-lg
          w-full
          py-1
          px-2
          justify-self-end
          [&::-ms-reveal]:hidden`}
        type={showPassword ? 'text' : 'password'}
        id={fieldName}
        {...register}
        aria-invalid={error ? 'true' : 'false'}
        aria-required="true"
        autoComplete="off"
        data-testid={fieldName}
        maxLength={255}
      />
      <div
        className={`${
          currentFieldState(fieldName) === 'valid'
            ? 'border-[var(--color-valid)]'
            : currentFieldState(fieldName) == 'error'
            ? 'border-[var(--color-error)]'
            : 'border-[var(--color-border)]'
        }
          border-2
          border-l-0
          rounded-r-lg
          flex
          flex-wrap
          content-center
          px-3
          cursor-pointer`}
      >
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          tabIndex={0}
          className="rounded-sm
            focus-within:outline
            focus-within:outline-[var(--color-outline)]
            focus-within:outline-2
            focus-within:outline-offset-0"
        >
          {showPassword && <EyeSlashIcon className="size-6" />}
          {!showPassword && <EyeIcon className="size-6" />}
        </button>
      </div>
      {currentFieldState(fieldName) === 'valid' && (
        <CheckMark fieldname={fieldName} />
      )}
    </div>
  );
};

export default PasswordField;
