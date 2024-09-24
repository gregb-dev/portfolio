import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Quote.css';

function QuoteWithDelay() {
    const { t } = useTranslation();
    const [firstText, setFirstText] = useState('');
    const [secondText, setSecondText] = useState('');
    const [index, setIndex] = useState(0);
    const [secondIndex, setSecondIndex] = useState(0);
    const firstTextContent = t('quote'); // First piece of text
    const secondTextContent = t('quote'); // Second piece of text
    const speed = 50; // Speed in milliseconds
    const delayBetweenTexts = 1000; // 1 second delay between texts

    // First text typing effect
    useEffect(() => {
        if (index < firstTextContent.length) {
            const timeoutId = setTimeout(() => {
                setFirstText(prev => prev + firstTextContent.charAt(index));
                setIndex(index + 1);
            }, speed);

            return () => clearTimeout(timeoutId);
        }
    }, [index, firstTextContent]);

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
            <h1 className="typewriter">
                {firstText}
                {index === firstTextContent.length && secondIndex > 0 ? secondText : null}
                <span className="cursor"></span>
            </h1>
        </div>
    );
}


export default QuoteWithDelay;
