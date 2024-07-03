const Focus = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="rounded-lg
      focus-within:outline
      focus-within:outline-[var(--color-outline)]
      focus-within:outline-2
      focus-within:outline-offset-2"
    >
      {children}
    </div>
  );
};

export default Focus;
