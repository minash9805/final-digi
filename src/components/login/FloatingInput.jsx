const FloatingInput = ({ id, label, type = "text", value, onChange }) => (
    <div className="relative w-full">
            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                className="peer w-full h-12 rounded-lg border border-black/30 bg-white px-3 text-[16px] outline-0 focus:border-[#EE4056]"
            />
            <label
                htmlFor={id}
                className="pointer-events-none absolute right-3 top-0 -translate-y-1/2 bg-white px-1 text-[11px] text-black/50 peer-focus:text-[#EE4056]"
            >
                    {label}
            </label>
    </div>
)
export default FloatingInput