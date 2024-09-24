import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './Quote.css';

function QuoteWithDelay() {
    const { t } = useTranslation();
    const [firstText, setFirstText] = useState('');
    const [secondText, setSecondText] = useState('');
    const [index, setIndex] = useState(0);
    const [secondIndex, setSecondIndex] = useState(0);

    const [fadeIn, setFadeIn] = useState(false); // State for fade-in effect

    const [startTyping, setStartTyping] = useState(false);
    const textContainerRef = useRef(null);

    const firstTextContent = t('quote.part1'); // First piece of text
    const secondTextContent = t('quote.part2'); // Second piece of text
    const speed = 90; // Speed in milliseconds
    const delayBetweenTexts = 1000; // 1 second delay between texts

    const initialDelay = 2000; // Initial delay before typing starts

    // Set up IntersectionObserver to trigger typing effect on scroll
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setFadeIn(true); // Trigger fade-in effect
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
    }, []);

    // First text typing effect
    useEffect(() => {
        if (startTyping && index < firstTextContent.length) {
            const timeoutId = setTimeout(() => {
                setFirstText(prev => prev + firstTextContent.charAt(index));
                setIndex(index + 1);
            }, speed);

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
            }, speed);

            return () => clearTimeout(timeoutId);
        }
    }, [index, secondIndex, secondTextContent, firstTextContent.length, delayBetweenTexts]);

    return (
        <div id="quote">
            <div ref={textContainerRef} className={`text-container ${fadeIn ? 'fade-in' : ''}`}>
                <h1 className="typewriter">
                    {firstText}
                    {index === firstTextContent.length && secondIndex > 0 ? (
                        <>
                            <br /> {/* Line break after first text */}
                            {secondText}
                        </>
                    ) : null}
                    <span className="cursor"></span>
                </h1>
            </div>

        </div>
    );
}


export default QuoteWithDelay;
