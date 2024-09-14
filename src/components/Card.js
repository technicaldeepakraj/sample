import React from 'react';
import Whatsapp from './Whatsapp';

const Card = ({ text, author }) => {

        return (
            <div className="quote-card">
                <div className="quote-content">
                    <p className="quote-text">"{text}"</p>
                    <p className="quote-author">- {author}</p>
                    <Whatsapp message={text} />
                </div>
            </div>
        );
    };

export default Card;
