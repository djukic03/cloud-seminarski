import { useState, useEffect } from 'react';

const useScrollHandler = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY;
            if (scroll < 400) {
                setIsSticky(false);
                setShowBackToTop(false);
            } else {
                setIsSticky(true);
                setShowBackToTop(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return { isSticky, showBackToTop, scrollToTop };
};

export default useScrollHandler;
