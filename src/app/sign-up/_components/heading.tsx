type HeadingProps = {
  children: React.ReactNode;
};

export default function Heading({ children }: HeadingProps) {
  return <h2 className="text-xl font-bold text-center">{children}</h2>;
}
