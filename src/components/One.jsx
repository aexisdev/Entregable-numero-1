import { useState } from 'react';
import React from 'react';
import Two from './Two';

const One = () => {
    const arrayFraps = [
        'Well done is better than well said',
        'Once you choose hope, anything’s possible',
        'Try it again. Fail again. Fail better',
        'Start wide, expand further, and never look back',
        'You only live once but if you do it right, once is enough',
        'Sometimes the heart sees what is invisible to the eye',
        'The harder I work, the luckier I get',
        'Change your thoughts and you change your world',
        'Don’t judge each day by the harvest you reap but by the seeds that you plant',
        'Dream as if you’ll live forever. Live as if you’ll die today',
        'Don’t dream your life, but live your drea',
    ]
    const randomFraps = Math.floor(Math.random() * arrayFraps.length);
    const [randomChange, setRandomChange] = useState(randomFraps);
    const btn = () => {
        setRandomChange(Math.floor(Math.random() * arrayFraps.length));
    }
    //====================================================================
    const colors = ['#715AFF', '#5887FF', '#7E6B8F', '#96E6B3', '#03B5AA', '#DA3E52','#2BD9FE', '#F15152', '#9A98B5', '#1D84B5','#B497D6', '#A9FBD7'];
    const changeRandomColor = Math.floor(Math.random() * colors.length);
    document.body.style = `background: ${colors[changeRandomColor]}`;
    //====================================================================
    //====================================================================
    return (
        <div>
            <h1 style={{color: colors[changeRandomColor]}}>{arrayFraps[randomChange]}</h1>
            <Two btn={btn}/>
        </div>
    );
};

export default One;