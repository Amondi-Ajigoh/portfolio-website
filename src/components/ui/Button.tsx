export default function Button({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="rounded-lg border px-6 py-3 font-medium">
      {children}
    </button>
  );
}