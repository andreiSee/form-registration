import React from 'react';
import { FieldError } from 'react-hook-form';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

type PropTypes = {
  id: string;
  isTouched: boolean | undefined;
  error: FieldError | undefined;
  errorMessage: string | undefined;
};

const FormFieldAlert = React.forwardRef<HTMLParagraphElement, PropTypes>(
  ({ id, isTouched, error, errorMessage }, ref) => {
    return (
      <div
        className="overflow-hidden
            relative
            mt-[calc(var(--gap)_*_-1)] 
            has-[p[role='alert']]:h-[var(--alert-height)] 
            has-[p[role='alert']]:transition-[height] 
            has-[p[role='alert']]:duration-[var(--alert-transition-duration)]
            empty:h-0
            empty:transition-[height]"
      >
        {error && isTouched && (
          <>
            <p
              id={id}
              ref={ref}
              className="text-[var(--color-error)]
              absolute
              flex
              bottom-0
              pt-2
              text-sm;"
              role="alert"
            >
              <InformationCircleIcon className="size-6 mr-2" />
              {errorMessage}
            </p>
          </>
        )}
      </div>
    );
  }
);

export default FormFieldAlert;
