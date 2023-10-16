import { Check } from "tabler-icons-react"

type Props = {
    children: JSX.Element | JSX.Element[]
    active?: boolean
    onClick?: () => void
}
const Button = ({ children, active, onClick }: Props) => {
    const activeStyle = active
        ? "bg-green-500 text-white"
        : "bg-white text-gray-900 border border-gray-300";

    const commonStyle = "text-sm px-4 py-2 rounded-full font-medium flex";

    const buttonStyle = `${commonStyle} ${activeStyle} hover:bg-green-100 hover:border-green-500 focus:outline-none`;

    return (
        <button onClick={onClick} className={buttonStyle}>
            {active && (
                <span className="mr-2 flex  items-center">
                    <Check size={20} className="mr-1" />
                </span>
            )}
            {children}
        </button>
    );
};

export default Button;

