type Props = {
    label: string
    checked: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox = ({ label, checked, onChange }: Props) => {
    return (
        <label className="flex items-center space-x-2 cursor-pointer">
            <input
                onChange={(e) => onChange(e)}
                type="checkbox"
                checked={checked}
                className="hidden peer"
            />
            <div className="w-5 h-5 border rounded-md border-gray-300 flex items-center justify-center peer-focus:ring-2 peer-focus:ring-blue-500 dark:peer-focus:ring-blue-600">
                {checked && (
                    <svg
                        className="w-3 h-3 text-blue-500 dark:text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                )}
            </div>
            <span className="text-sm text-black">{label}</span>
        </label>
    );
};

export default Checkbox;
