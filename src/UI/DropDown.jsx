const DropDown = ({ children, className, value, onChange, register, name }) => {
  if (register)
    return (
      <select className={className} {...register(name)}>
        {children}
      </select>
    );

  return (
    <select className={className} value={value} onChange={onChange}>
      {children}
    </select>
  );
};

function Option({ children, value }) {
  return <option value={value}>{children}</option>;
}

DropDown.Option = Option;

export default DropDown;
