import { useEffect, useState } from "react";
import { BiArrowFromBottom } from 'react-icons/bi';
import { classNames } from '../../../utility/classNames';

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if(Window.pageYOffset > 300) {
            setIsVisible(true)
        }else {
            setIsVisible(false)
        }
    };

    const ScrollToTop = () => {
        Window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        Window.addEventListener('scroll', toggleVisibility);

        return () => {
            Window.removeEventListener('scroll', toggleVisibility);
        }

    }, []);

    return (
        <div className="fixed bottom-2 right-2">
            <button type="button" onClick={ScrollToTop} className={classNames(
                isVisible ? 'opacity-100' : 'opacity-0',
                'inline-flex items-center p-3 rounded-full shadow-sm text-white bg-pink-600 transition-opacity hover:bg-pink-700 focus:outline-none focus:ring-2 focus-ring-offset-2 focus:ring-pink-500'
            )}>
                <BiArrowFromBottom className="h-6 w-6" aria-hidden="true"/>
            </button>
        </div>
    )
};