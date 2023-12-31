import { useCallback, useMemo } from "react";
import { GalleryItem } from "../../types";
import { Link } from "react-router-dom";

type Props = {
    item: GalleryItem;
    isSingle?: boolean;
};

const GalleryCard = ({ item, isSingle }: Props) => {
    const isImage = useCallback((url: string) => {
        return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
    }, []);

    const isVideo = useCallback((url: string) => {
        return /\.(mp4)$/.test(url);
    }, []);

    const renderMedia = useMemo(() => {
        if (isImage(item.images[0].link)) {
            return (
                <img
                    className="w-full h-full object-cover"
                    src={item.images[0].link}
                    alt={item?.title}
                />
            );
        } else if (isVideo(item.images[0].link)) {
            return <video controls src={item.images[0].link} />;
        } else {
            return null;
        }
    }, [isImage, isVideo, item.images, item?.title]);

    return isSingle ? (
        renderMedia
    ) : (
        <Link to={`/${item.id}`}>
            <div className="border-2 overflow-hidden h-[420px] relative rounded shadow-lg">
                {renderMedia}
                <div className="p-4 absolute bottom-0 bg-white w-full">
                    <h3 className="text-lg font-medium text-gray-800">
                        {item.title}
                    </h3>
                </div>
            </div>
        </Link>
    );
};

export default GalleryCard;
