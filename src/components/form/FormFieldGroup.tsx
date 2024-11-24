const FormFieldGroup = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="grid
      sm:grid-flow-col
      sm:grid-cols-[1fr_1.5fr]
      gap-[var(--gap)]
      sm:gap-0
      items-center"
    >
      {children}
    </div>
  );
};

export default FormFieldGroup;
