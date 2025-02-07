import { useEffect, useState } from "react";

function useImagePreloader(imageUrls) {
    const [loadingStatus, setLoadingStatus] = useState('idle');
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!imageUrls.length) return;

        let loadedCount = 0;
        let aborted = false;

        setLoadingStatus('loading');

        const loadImage = (url) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                
                img.onload = () => resolve(url);
                img.onerror = () => reject(url);
                img.src = url;
            });
        };

        const promises = imageUrls.map(url => {
            return loadImage(url)
                .then(() => {
                    if (!aborted) {
                        loadedCount++;
                        setProgress((loadedCount / imageUrls.length) * 100);
                    }
                })
                .catch(error => {
                    if (!aborted) {
                        setLoadingStatus('error');
                        console.error(`Failed to load image: ${error}`);
                    }
                });
        });

        Promise.all(promises)
            .then(() => {
                if (!aborted) {
                    setLoadingStatus('completed');
                }
            })
            .catch(() => {
                if (!aborted) {
                    setLoadingStatus('error');
                }
            });

        return () => {
            aborted = true;
        };
    }, [imageUrls]);

    return { loadingStatus, progress };
}

function ImageGallery() {
    const images = [
        "https://i.ibb.co/yBX6kjKp/4.png",
        "https://i.ibb.co/Ps2G5KWh/5.png",
        "https://i.ibb.co/wF4k2gPC/6.png",
        "https://i.ibb.co/Tx7h5xfV/7.png"
    ];

    const { loadingStatus, progress } = useImagePreloader(images);

    if (loadingStatus === 'loading') {
        return (
            <div>
                <p>이미지 로딩 중... {Math.round(progress)}%</p>
                <div style={{
                    width: '200px',
                    height: '20px',
                    border: '1px solid #ccc'
                }}>
                    <div style={{
                        width: `${progress}%`,
                        height: '100%',
                        backgroundColor: 'blue',
                        transition: 'width 0.3s'
                    }} />
                </div>
            </div>
        );
    }

    if (loadingStatus === 'error') {
        return <div>이미지 로딩 중 오류가 발생했습니다.</div>;
    }

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            {images.map((src, index) => (
                <img 
                    key={index}
                    src={src}
                    alt={`Gallery item ${index + 1}`}
                    style={{ width: '100%', height: 'auto' }}
                />
            ))}
        </div>
    );
}

export default ImageGallery;