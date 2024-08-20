

function FormRow({children,label}) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-2 mb-6">
        <label htmlFor={children.props.id} className="basis-1/4 md:text-lg text-slate-200 font-semibold">{label}</label>
        {children}
    </div>
  )
}

export default FormRow