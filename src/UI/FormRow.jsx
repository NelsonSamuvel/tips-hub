

function FormRow({children,label}) {
  return (
    <div className="flex items-center gap-2 mb-4">
        <label htmlFor={children.props.id} className="basis-1/4 text-lg text-slate-800">{label}</label>
        {children}
    </div>
  )
}

export default FormRow