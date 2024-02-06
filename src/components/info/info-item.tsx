type InfoItemProps = {
  children: React.ReactNode;
};

export default function InfoItem({ children }: InfoItemProps) {
  return (
    <li className="w-full border rounded-lg border-blue-100 text-blue-500 py-6 flex justify-center gap-x-4">
      {children}
    </li>
  );
}
