export default function SubmitButton({
  label,
  loading,
}: {
  label: string;
  loading?: boolean;
}) {
  return (
    <button
      type="submit"
      disabled={!!loading}
      className="w-full col-span-2 inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 text-white text-sm font-medium px-4 py-2.5 hover:bg-black disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer">
      {loading && (
        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
        </svg>
      )}
      <span>{label}</span>
    </button>
  );
}
