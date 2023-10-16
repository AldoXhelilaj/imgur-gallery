import { useSelector } from "react-redux";
import { selectGalleryState } from "../../store/selectors/gallerySelector";
import  WarningIcon  from '../../assets/warning';
const ErrorHandler = () => {
    const gallery = useSelector(selectGalleryState);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <WarningIcon />
            <h1 className="mt-6 text-2xl text-center text-gray-800 dark:text-gray-200">
                {gallery?.error?.data.error}
            </h1>
        </div>
    );
};

export default ErrorHandler;
