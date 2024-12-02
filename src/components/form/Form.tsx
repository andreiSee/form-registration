import { zodResolver } from '@hookform/resolvers/zod';
import { RefObject, useLayoutEffect, useRef, useState } from 'react';
import { FieldError, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import '../../app.css';
import Focus from '../Focus.tsx';
import { Label } from '../HtmlTags.tsx';
import FormFieldAlert from './FormFieldAlert.tsx';
import FormFieldGroup from './FormFieldGroup.tsx';
import InfoBox from './InfoBox.tsx';
import schema from './_schema.ts';
import TextField from './TextField.tsx';
import EmailField from './EmailField.tsx';
import PasswordField from './PasswordField.tsx';
import SubmitButton from './SubmitButton.tsx';

const passwordRules = [
  '8 Zeichen (Mindestens)',
  '1 Goßbuchstabe (Mindestens)',
  '1 Kleinbuchstabe (Mindestens)',
  '1 Sonderzeichen (Mindestens)',
  '1 Zahl (Mindestens)',
];

const RegistrationSchema = schema;

export type RegistrationData = z.infer<typeof RegistrationSchema>;

interface CheckMarkProps {
  fieldname: keyof RegistrationData;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    getFieldState,
    formState: { errors, isValid, touchedFields },
  } = useForm<RegistrationData>({
    resolver: zodResolver(RegistrationSchema),
    mode: 'all',
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    },
  });
  const firstnameAlert = useRef<HTMLParagraphElement>(null);
  const lastnameAlert = useRef<HTMLParagraphElement>(null);
  const emailAlert = useRef<HTMLParagraphElement>(null);
  const [formSubmit, setFormSubmit] = useState(false);

  const onSubmit: SubmitHandler<RegistrationData> = (data) => {
    console.log(data);
    setFormSubmit(true);
    setTimeout(() => {
      setFormSubmit(false);
    }, 4000);
  };

  const currentFieldState = (fieldname: keyof RegistrationData) => {
    const valid =
      getFieldState(fieldname).isDirty && !getFieldState(fieldname).error;

    const error = getFieldState(fieldname).error && touchedFields[fieldname];

    if (valid) return 'valid';
    if (error) return 'error';
    return;
  };

  useLayoutEffect(() => {
    const fieldsToCheck = [
      { alert: firstnameAlert, error: errors.firstname },
      { alert: lastnameAlert, error: errors.lastname },
      { alert: emailAlert, error: errors.email },
    ];

    for (const fieldname of fieldsToCheck) {
      const ref: RefObject<HTMLParagraphElement> = fieldname.alert;
      const refParent = ref?.current?.parentElement;
      const fieldError: FieldError | undefined = fieldname.error;

      if (fieldError && ref.current !== null && refParent) {
        const { height } = ref.current.getBoundingClientRect();
        refParent.style.setProperty('--alert-height', `${height}px`);
      }
    }
  }, [errors.firstname, errors.lastname, errors.email]);

  return (
    <>
      <p className="mb-8 text-center">
        Dieses Formular dient nur zur Darstellung von Frontend-Technologien.
        <br />
        Die eingegebenen Daten werden nicht gespeichert.
      </p>
      <section className="rounded-[20px] px-12 py-12 shadow-[16px_16px_40px_#cccccc] bg-white">
        <form
          name="registration"
          className="flex flex-col gap-4 md:gap-6"
          action="#"
          method="get"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input type="hidden" name="csrf-token" value="832fwe63jd87we3esr7d" />
          <FormFieldGroup>
            <Label htmlFor="firstname">Vorname (Pflichtfeld)</Label>
            <Focus>
              <TextField
                fieldName="firstname"
                register={{ ...register('firstname') }}
                currentFieldState={currentFieldState}
                error={errors.firstname}
              />
            </Focus>
          </FormFieldGroup>
          <FormFieldAlert
            id="firstname-error"
            ref={firstnameAlert}
            isTouched={touchedFields.firstname}
            error={errors.firstname}
            errorMessage={errors.firstname?.message}
          />
          <FormFieldGroup>
            <Label htmlFor="lastname">Nachname (Pflichtfeld)</Label>
            <Focus>
              <TextField
                fieldName="lastname"
                register={{ ...register('lastname') }}
                currentFieldState={currentFieldState}
                error={errors.lastname}
              />
            </Focus>
          </FormFieldGroup>
          <FormFieldAlert
            id="lastname-error"
            ref={lastnameAlert}
            isTouched={touchedFields.lastname}
            error={errors.lastname}
            errorMessage={errors.lastname?.message}
          />
          <FormFieldGroup>
            <Label htmlFor="email">E-Mail (Pflichtfeld) </Label>
            <Focus>
              <EmailField
                fieldName="email"
                register={{ ...register('email') }}
                currentFieldState={currentFieldState}
                error={errors.email}
              />
            </Focus>
          </FormFieldGroup>
          <FormFieldAlert
            id="email-error"
            ref={emailAlert}
            isTouched={touchedFields.email}
            error={errors.email}
            errorMessage={errors.email?.message}
          />
          <FormFieldGroup>
            <Label htmlFor="password">Passwort (Pflichtfeld) </Label>
            <Focus>
              <PasswordField
                fieldName="password"
                register={{ ...register('password') }}
                currentFieldState={currentFieldState}
                error={errors.password}
              />
            </Focus>
          </FormFieldGroup>
          <div className="text-sm">
            <p
              className={
                currentFieldState('password') === 'error'
                  ? 'text-[var(--color-error)]'
                  : ''
              }
              id="password-hint"
              data-testid="password-hint"
            >
              {passwordRules.map((rule, index) => (
                <span key={rule}>
                  <span className="whitespace-nowrap">{rule}</span>
                  <span>{index !== passwordRules.length - 1 && ', '}</span>
                </span>
              ))}
            </p>
          </div>

          <Focus>
            <SubmitButton
              formSubmit={formSubmit}
              isValid={isValid}
              touchedFieldsCount={Object.keys(touchedFields).length}
            />
          </Focus>
        </form>
      </section>
      <section className="mt-20 rounded-[20px] p-12 shadow-[16px_16px_40px_#cccccc] bg-white">
        <InfoBox />
      </section>
    </>
  );
};

export const CheckMark = ({ fieldname }: CheckMarkProps) => {
  {
    return (
      <div
        data-testid={`${fieldname}-check-mark`}
        className="text-[var(--color-valid)] relative px-3 flex items-center"
      >
        <span className="absolute bg-white h-full right-0 animate-[checkMark_0.4s_ease-in-out]"></span>
        &#10003;
      </div>
    );
  }
};

export default Form;
