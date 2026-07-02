export default function Badge({
  text,
}: {
  text: string;
}) {
  return (
    <span className="rounded-full border px-3 py-1 text-sm">
      {text}
    </span>
  );
}