export const H1 = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="text-2xl w-fit [&:not(a>&)]:mb-4">{children}</h1>;
};

export const H2 = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) => {
  return (
    <h2 className="text-xl font-semibold mb-2" id={id}>
      {children}
    </h2>
  );
};

export const H3 = ({ children }: { children: React.ReactNode }) => {
  return <h3 className="text-lg font-semibold mb-2">{children}</h3>;
};

export const P = ({ children }: { children: React.ReactNode }) => {
  return <p className="mb-6">{children}</p>;
};

export const Label = ({
  children,
  htmlFor,
}: {
  children: React.ReactNode;
  htmlFor: string;
}) => {
  return (
    <label className="cursor-pointer" htmlFor={htmlFor}>
      {children}
    </label>
  );
};
