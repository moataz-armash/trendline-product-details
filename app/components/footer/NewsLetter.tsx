export default function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mt-4 rounded-2xl border border-[var(--color-black-50)] bg-white backdrop-blur px-2 py-2">
      <div className="flex items-center gap-2">
        <input
          type="email"
          placeholder="Email address"
          className="h-12 flex-1 bg-transparent px-4 text-black-500 placeholder:text-black-200 outline-none"
        />
        <button
          type="submit"
          className="h-10 rounded-xl bg-[var(--color-brand-800)] px-6 text-white hover:brightness-110">
          Send
        </button>
      </div>
    </form>
  );
}
