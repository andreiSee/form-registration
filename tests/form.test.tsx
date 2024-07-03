import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '../src/components/form/Form';

describe('Registration Form', () => {
  it.each([
    { fieldname: 'firstname', searchFor: /vorname/i },
    { fieldname: 'lastname', searchFor: /nachname/i },
  ])(
    'should be invalid and display an error message if $fieldname has less then 2 characters',
    async ({ searchFor }) => {
      render(<Form />);
      const user = userEvent.setup();
      const field = screen.getByRole('textbox', { name: searchFor });

      await user.type(field, 'a');
      // Field must be touched to display an error.
      await userEvent.tab();

      expect(field).toHaveAttribute(
        'aria-invalid',
        expect.stringMatching('true')
      );
      expect(screen.getByRole('alert')).toHaveTextContent(searchFor);
    }
  );

  it.each([
    { fieldname: 'firstname', searchFor: /vorname/i },
    { fieldname: 'lastname', searchFor: /nachname/i },
  ])(
    'should be valid and display a check mark if $fieldname has more then 1 character',
    async ({ fieldname, searchFor }) => {
      render(<Form />);
      const user = userEvent.setup();
      const field = screen.getByRole('textbox', { name: searchFor });

      await user.type(field, 'aa');

      expect(field).toHaveAttribute(
        'aria-invalid',
        expect.stringMatching('false')
      );

      expect(screen.getByTestId(`${fieldname}-check-mark`)).toBeInTheDocument();
    }
  );

  it('should be invalid and display an error message if email not fit regex', async () => {
    render(<Form />);
    const user = userEvent.setup();
    const emailField = screen.getByRole('textbox', { name: /mail/i });

    await user.type(emailField, 'a');
    // Field must be touched to display an error.
    await userEvent.tab();

    expect(emailField).toHaveAttribute(
      'aria-invalid',
      expect.stringMatching('true')
    );
    expect(screen.getByRole('alert')).toHaveTextContent(/mail/i);
  });

  it('should be valid and display a check mark if email fits regex', async () => {
    render(<Form />);
    const user = userEvent.setup();
    const emailField = screen.getByRole('textbox', { name: /mail/i });

    await user.type(emailField, 'test@test.de');
    // Field must be touched to display an error.
    await userEvent.tab();

    expect(emailField).toHaveAttribute(
      'aria-invalid',
      expect.stringMatching('false')
    );

    expect(screen.getByTestId('email-check-mark')).toBeInTheDocument();
  });

  it('should be invalid and display an error message if password not fit regex', async () => {
    render(<Form />);
    const user = userEvent.setup();
    const passwordField = screen.getByTestId('password');

    await user.type(passwordField, 'a');
    // Field must be touched to display an error.
    await userEvent.tab();

    expect(passwordField).toHaveAttribute(
      'aria-invalid',
      expect.stringMatching('true')
    );
    expect(screen.getByTestId('password-hint')).toHaveClass(
      'text-[var(--color-error)]'
    );
  });

  it('should be valid and display a check mark if password fits regex', async () => {
    render(<Form />);
    const user = userEvent.setup();
    const passwordField = screen.getByTestId('password');

    await user.type(passwordField, 'T3st!Me?');
    // Field must be touched to display an error.
    await userEvent.tab();

    expect(passwordField).toHaveAttribute(
      'aria-invalid',
      expect.stringMatching('false')
    );

    expect(screen.getByTestId('password-check-mark')).toBeInTheDocument();
  });
});
