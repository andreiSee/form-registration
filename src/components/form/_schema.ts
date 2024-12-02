import { z } from 'zod';
import * as config from './_config.ts';

const schema = z.object({
  firstname: z
    .string()
    .min(
      config.minFirstname,
      `Der Vorname muss mindestens ${config.minFirstname} Zeichen lang sein`
    )
    .max(
      config.maxFirstname,
      `Der Vorname darf maximal ${config.maxFirstname} Zeichen lang sein`
    ),
  lastname: z
    .string()
    .min(
      config.minLastname,
      `Der Nachname muss mindestens ${config.minLastname} Zeichen lang sein`
    )
    .max(
      config.maxLastname,
      `Der Nachname darf maximal ${config.maxLastname} Zeichen lang sein`
    ),
  email: z
    .string()
    .regex(config.emailRegEx, 'Bitte geben sie eine gültige E-Mail-Adresse an'),
  // .min(2, 'Bitte geben sie eine gültige E-Mail-Adresse an'),
  password: z.string().min(8).regex(config.passwordRegEx),
  // password: z.string().min(2, 'Bitte geben sie ein gültiges Passwort an'),
});

export default schema;
