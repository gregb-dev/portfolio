import './Quote.css';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function Quote() {

    const { t } = useTranslation();

    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const text = t('quote'); // The text to be typed
    const speed = 80; // Speed in milliseconds

    useEffect(() => {
        // Function to type the text
        const typeWriter = () => {
            if (index < text.length) {
                setDisplayedText(prev => prev + text.charAt(index)); // Append the next character
                setIndex(prev => prev + 1); // Move to the next character
            }
        };

        // Set a timeout for the typing effect
        const timeoutId = setTimeout(typeWriter, speed);

        // Cleanup the timeout if the component is unmounted
        return () => clearTimeout(timeoutId);
    }, [index, text, speed]);

    return (
        <>
            <div id="quote">
                {/*<p id="demo">{t('quote')}</p>*/}
                <h1 className="typewriter">
                    {displayedText}
                    <span className="cursor"></span>
                </h1>
            </div>
        </>
    )
}

export default Quote;