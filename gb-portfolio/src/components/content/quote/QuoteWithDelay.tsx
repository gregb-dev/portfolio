import './QuoteWithDelay.css';
import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

function QuoteWithDelay() {
    const { t, i18n } = useTranslation();

    const [firstText, setFirstText] = useState('');
    const [secondText, setSecondText] = useState('');
    const [index, setIndex] = useState(0);
    const [secondIndex, setSecondIndex] = useState(0);

    const [fadeIn, setFadeIn] = useState(false); // State for fade-in effect

    const [startTyping, setStartTyping] = useState(false);
    const textContainerRef = useRef(null);

    const firstTextContent = t('quote.part1');
    const secondTextContent = t('quote.part2');

    const typingSpeed = 90; // in milliseconds
    const delayBetweenTexts = 1000; // 1 second delay between texts

    const initialDelay = 1000; // Initial delay before typing starts

    // Function to reset the typing animation
    const resetTyping = () => {
        setFirstText('');
        setSecondText('');
        setIndex(0);
        setSecondIndex(0);
        setStartTyping(false);
        setFadeIn(false);
    };

    // Reset typing animation when the locale changes
    useEffect(() => {
        resetTyping();

        // IntersectionObserver setup to trigger typing effect on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setFadeIn(true);
                    setTimeout(() => {
                        setStartTyping(true);
                    }, initialDelay); // Start typing after initial delay
                    observer.unobserve(entry.target); // Stop observing once the text starts typing
                }
            });
        }, { threshold: 0.5 });

        if (textContainerRef.current) {
            observer.observe(textContainerRef.current);
        }

        return () => {
            if (textContainerRef.current) {
                observer.unobserve(textContainerRef.current);
            }
        };
    }, [i18n.language]); // Dependency on language change

    // First text typing effect
    useEffect(() => {
        if (startTyping && index < firstTextContent.length) {
            const timeoutId = setTimeout(() => {
                setFirstText(prev => prev + firstTextContent.charAt(index));
                setIndex(index + 1);
            }, typingSpeed);

            return () => clearTimeout(timeoutId);
        }
    }, [index, firstTextContent, startTyping]);

    // Second text typing effect with delay
    useEffect(() => {
        if (index === firstTextContent.length && secondIndex === 0) {
            // Add delay between the two texts
            const delayTimeoutId = setTimeout(() => {
                setSecondIndex(1); // Trigger second text typing after delay
            }, delayBetweenTexts);

            return () => clearTimeout(delayTimeoutId);
        }

        if (secondIndex > 0 && secondIndex <= secondTextContent.length) {
            const timeoutId = setTimeout(() => {
                setSecondText(prev => prev + secondTextContent.charAt(secondIndex - 1));
                setSecondIndex(secondIndex + 1);
            }, typingSpeed);

            return () => clearTimeout(timeoutId);
        }
    }, [index, secondIndex, secondTextContent, firstTextContent.length, delayBetweenTexts]);

    return (
        <>
            <div id='quote'>
                <div className='content quote-container'>
                    <div className='quote site-width'>
                        <p className='quote-date'>2024</p>
                        <div className='quote-code-snippet'>
                            <p className='quote-blockquote'>
                                <span className='quote-brackets'>{`<`}</span>blockquote<span className='quote-brackets'>{`>`}</span>
                            </p>
                            <div ref={textContainerRef} className={`quote-message-wrapper ${fadeIn ? 'fade-in' : ''}`}>
                                <h1 className='quote-message'>
                                    {firstText}
                                    {index === firstTextContent.length && secondIndex > 0 ? (
                                        <>
                                            <br /> {/* Line break after first text */}
                                            {secondText}
                                        </>
                                    ) : null}
                                    <span className='quote-cursor'></span>
                                </h1>
                            </div>
                            <p className='quote-blockquote'>
                                <span className='quote-brackets'>{`</`}</span>blockquote<span className='quote-brackets'>{`>`}</span>
                            </p>
                        </div>
                        <p className='quote-author'>— GREG</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default QuoteWithDelay;
