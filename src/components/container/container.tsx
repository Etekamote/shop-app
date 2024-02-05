type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <div className="max-w-screen-xl px-8 m-auto ">{children}</div>;
}
