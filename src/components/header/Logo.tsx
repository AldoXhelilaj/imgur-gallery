import { Link } from "react-router-dom";


const Logo = () => {
    return (
        <Link to={"/"}>
            <img alt="Logo Imgur" src={'https://upload.wikimedia.org/wikipedia/commons/e/e9/Imgur_logo.svg'} />
        </Link>
    )
}

export default Logo