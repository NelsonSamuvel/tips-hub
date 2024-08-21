function FormRow({ children, label, error }) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-2 mb-6">
      <label
        htmlFor={children.props.id}
        className={`basis-1/4 md:text-lg text-slate-200 font-semibold ${
          error ? "self-start" : ""
        }`}
      >
        {label}
      </label>
      <div className="grow">
        {children}
        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
      </div>
    </div>
  );
}

export default FormRow;
