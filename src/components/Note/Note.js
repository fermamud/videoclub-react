import { useState } from 'react';
import './Note.css';

function Note(props) {

    console.log(props);
    
    function setNote(note) {
        props.handleNote(note);
    }

    const [color1, setColor1] = useState('#DDB03B');
    const [color2, setColor2] = useState('#DDB03B');
    const [color3, setColor3] = useState('#DDB03B');
    const [color4, setColor4] = useState('#DDB03B');
    const [color5, setColor5] = useState('#DDB03B');

    function handleClick(note) {
        const randomDarkColor = '#' + Math.floor(Math.random() * 128).toString(16).padStart(2, '0') + 
        Math.floor(Math.random() * 128).toString(16).padStart(2, '0') + 
        Math.floor(Math.random() * 128).toString(16).padStart(2, '0');

        switch (note) {
            case 1:
                setColor1(randomDarkColor);
                setColor2('#DDB03B');
                setColor3('#DDB03B');
                setColor4('#DDB03B');
                setColor5('#DDB03B');
                break;
            case 2:
                setColor1(randomDarkColor);
                setColor2(randomDarkColor);
                setColor3('#DDB03B');
                setColor4('#DDB03B');
                setColor5('#DDB03B');
                break;
            case 3:
                setColor1(randomDarkColor);
                setColor2(randomDarkColor);
                setColor3(randomDarkColor);
                setColor4('#DDB03B');
                setColor5('#DDB03B');
                break;
            case 4:
                setColor1(randomDarkColor);
                setColor2(randomDarkColor);
                setColor3(randomDarkColor);
                setColor4(randomDarkColor);
                setColor5('#DDB03B');
                break;
            case 5:
                setColor1(randomDarkColor);
                setColor2(randomDarkColor);
                setColor3(randomDarkColor);
                setColor4(randomDarkColor);
                setColor5(randomDarkColor);
                break;
            default:
                break;
        }
    };

    return (
           <div className="notes">
            <div className="notes__texte">
                <p>Cliquez sur l'étoile pour voter ! Quand vous voyez notre ami cinéphile, cela signifie que votre vote a été pris en compte !</p>
            </div>
            <div className="notes__etoiles">
                <button onClick={() => setNote(1)}>
                <svg width="177" height="169" viewBox="0 0 177 169" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => handleClick(1)}>
                <path d="M88.5 0L108.369 58.3881H172.669L120.65 94.4739L140.519 152.862L88.5 116.776L36.481 152.862L56.3505 94.4739L4.3315 58.3881H68.6305L88.5 0Z" fill="#DDB03B" fillOpacity="1"/>
                <path d="M106.19 70.33L104.16 70.66L104.73 64.09C104.77 63.67 104.54 63.27 104.15 63.1C103.77 62.92 103.32 63 103.02 63.3C102.96 63.36 96.96 69.32 87.14 72.19C84.48 72.97 82.32 74.8 81.22 77.23C78.97 82.18 81.17 86.81 87.1 89.59C87.55 89.8 87.88 90.21 87.99 90.67V97.12H86.56C81.7 97.12 77.74 101.07 77.74 105.94V112C77.74 112.55 78.19 113 78.74 113H105.35C105.9 113 106.35 112.55 106.35 112V105.94C106.35 101.08 102.4 97.12 97.53 97.12H96.1V97.05C100.3 96.91 103.67 93.46 103.67 89.23V87.64C105.15 87.05 106.2 85.61 106.2 83.93C106.2 83.38 105.75 82.93 105.2 82.93H103.67V76.4L107.14 71.92C107.39 71.6 107.42 71.15 107.21 70.8C107 70.45 106.59 70.27 106.19 70.33ZM94.1 96.89V100.95C94.1 102.08 93.18 103 92.05 103C90.92 103 90 102.08 90 100.95V94.58C91.08 95.74 92.5 96.56 94.1 96.89ZM97.53 99.12C101.29 99.12 104.35 102.18 104.35 105.94V111H79.74V105.94C79.74 102.18 82.8 99.12 86.56 99.12H87.99V100.95C87.99 103.18 89.81 105 92.04 105C94.28 105 96.09 103.18 96.09 100.95V99.12H97.53ZM102.2 85.93C101.46 85.93 100.82 85.53 100.47 84.93H103.93C103.59 85.53 102.94 85.93 102.2 85.93ZM99.21 82.94H98.1H92.1H90.81L90.98 82.21C91.22 81.21 92.09 80.49 93.09 80.45C97.15 80.29 100.01 79.03 101.66 78.03V82.94H99.21ZM96.83 84.94C96.48 85.54 95.84 85.94 95.1 85.94C94.36 85.94 93.72 85.54 93.37 84.94H96.83ZM101.93 75.38C101.54 75.72 98.54 78.22 93.01 78.44C91.11 78.52 89.47 79.87 89.03 81.73L88.56 83.69C88.49 83.99 88.56 84.3 88.75 84.54C88.94 84.78 89.23 84.92 89.53 84.92H91.23C91.68 86.64 93.23 87.92 95.09 87.92C96.65 87.92 97.98 87.02 98.64 85.72C99.22 86.87 100.33 87.69 101.66 87.87V89.22C101.66 92.43 99.04 95.05 95.83 95.05H95.7C92.91 95.05 90.5 93.07 89.98 90.33C89.97 90.27 89.94 90.22 89.93 90.17C89.92 90.15 89.92 90.14 89.91 90.12C89.64 89.1 88.94 88.22 87.96 87.76C85.09 86.41 80.64 83.36 83.05 78.03C83.91 76.14 85.6 74.7 87.71 74.09C94.8 72.02 99.93 68.47 102.53 66.37L102.07 71.74C102.04 72.05 102.16 72.35 102.39 72.56C102.62 72.77 102.93 72.86 103.23 72.81L104.02 72.68L101.93 75.38Z" fill={color1}/>
                <path d="M78.59 75.9C78.8 75.9 79 75.84 79.18 75.71C79.49 75.49 79.64 75.11 79.58 74.73L79.02 71.45L81.41 69.12C81.68 68.85 81.78 68.46 81.66 68.1C81.54 67.74 81.23 67.47 80.85 67.42L77.55 66.94L76.07 63.95C75.73 63.27 74.61 63.27 74.28 63.95L72.8 66.94L69.5 67.42C69.12 67.47 68.81 67.74 68.69 68.1C68.57 68.46 68.67 68.86 68.94 69.12L71.33 71.45L70.77 74.73C70.71 75.11 70.86 75.48 71.17 75.71C71.48 75.93 71.89 75.96 72.22 75.79L75.17 74.24L78.12 75.79C78.27 75.87 78.43 75.9 78.59 75.9ZM75.64 72.22C75.49 72.14 75.34 72.11 75.18 72.11C75.02 72.11 74.86 72.15 74.71 72.22L73.09 73.07L73.4 71.26C73.46 70.94 73.35 70.6 73.11 70.38L71.8 69.1L73.61 68.84C73.94 68.79 74.22 68.59 74.36 68.29L75.17 66.65L75.98 68.29C76.13 68.58 76.41 68.79 76.73 68.84L78.54 69.1L77.23 70.38C76.99 70.61 76.89 70.94 76.94 71.26L77.25 73.07L75.64 72.22Z" fill={color1}/>
                </svg>
                </button>
                <button onClick={() => setNote(2)}>
                <svg width="177" height="169" viewBox="0 0 177 169" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => handleClick(2)}>
                <path d="M88.5 0L108.369 58.3881H172.669L120.65 94.4739L140.519 152.862L88.5 116.776L36.481 152.862L56.3505 94.4739L4.3315 58.3881H68.6305L88.5 0Z" fill="#DDB03B" fillOpacity="1"/>
                <path d="M106.19 70.33L104.16 70.66L104.73 64.09C104.77 63.67 104.54 63.27 104.15 63.1C103.77 62.92 103.32 63 103.02 63.3C102.96 63.36 96.96 69.32 87.14 72.19C84.48 72.97 82.32 74.8 81.22 77.23C78.97 82.18 81.17 86.81 87.1 89.59C87.55 89.8 87.88 90.21 87.99 90.67V97.12H86.56C81.7 97.12 77.74 101.07 77.74 105.94V112C77.74 112.55 78.19 113 78.74 113H105.35C105.9 113 106.35 112.55 106.35 112V105.94C106.35 101.08 102.4 97.12 97.53 97.12H96.1V97.05C100.3 96.91 103.67 93.46 103.67 89.23V87.64C105.15 87.05 106.2 85.61 106.2 83.93C106.2 83.38 105.75 82.93 105.2 82.93H103.67V76.4L107.14 71.92C107.39 71.6 107.42 71.15 107.21 70.8C107 70.45 106.59 70.27 106.19 70.33ZM94.1 96.89V100.95C94.1 102.08 93.18 103 92.05 103C90.92 103 90 102.08 90 100.95V94.58C91.08 95.74 92.5 96.56 94.1 96.89ZM97.53 99.12C101.29 99.12 104.35 102.18 104.35 105.94V111H79.74V105.94C79.74 102.18 82.8 99.12 86.56 99.12H87.99V100.95C87.99 103.18 89.81 105 92.04 105C94.28 105 96.09 103.18 96.09 100.95V99.12H97.53ZM102.2 85.93C101.46 85.93 100.82 85.53 100.47 84.93H103.93C103.59 85.53 102.94 85.93 102.2 85.93ZM99.21 82.94H98.1H92.1H90.81L90.98 82.21C91.22 81.21 92.09 80.49 93.09 80.45C97.15 80.29 100.01 79.03 101.66 78.03V82.94H99.21ZM96.83 84.94C96.48 85.54 95.84 85.94 95.1 85.94C94.36 85.94 93.72 85.54 93.37 84.94H96.83ZM101.93 75.38C101.54 75.72 98.54 78.22 93.01 78.44C91.11 78.52 89.47 79.87 89.03 81.73L88.56 83.69C88.49 83.99 88.56 84.3 88.75 84.54C88.94 84.78 89.23 84.92 89.53 84.92H91.23C91.68 86.64 93.23 87.92 95.09 87.92C96.65 87.92 97.98 87.02 98.64 85.72C99.22 86.87 100.33 87.69 101.66 87.87V89.22C101.66 92.43 99.04 95.05 95.83 95.05H95.7C92.91 95.05 90.5 93.07 89.98 90.33C89.97 90.27 89.94 90.22 89.93 90.17C89.92 90.15 89.92 90.14 89.91 90.12C89.64 89.1 88.94 88.22 87.96 87.76C85.09 86.41 80.64 83.36 83.05 78.03C83.91 76.14 85.6 74.7 87.71 74.09C94.8 72.02 99.93 68.47 102.53 66.37L102.07 71.74C102.04 72.05 102.16 72.35 102.39 72.56C102.62 72.77 102.93 72.86 103.23 72.81L104.02 72.68L101.93 75.38Z" fill={color2}/>
                <path d="M78.59 75.9C78.8 75.9 79 75.84 79.18 75.71C79.49 75.49 79.64 75.11 79.58 74.73L79.02 71.45L81.41 69.12C81.68 68.85 81.78 68.46 81.66 68.1C81.54 67.74 81.23 67.47 80.85 67.42L77.55 66.94L76.07 63.95C75.73 63.27 74.61 63.27 74.28 63.95L72.8 66.94L69.5 67.42C69.12 67.47 68.81 67.74 68.69 68.1C68.57 68.46 68.67 68.86 68.94 69.12L71.33 71.45L70.77 74.73C70.71 75.11 70.86 75.48 71.17 75.71C71.48 75.93 71.89 75.96 72.22 75.79L75.17 74.24L78.12 75.79C78.27 75.87 78.43 75.9 78.59 75.9ZM75.64 72.22C75.49 72.14 75.34 72.11 75.18 72.11C75.02 72.11 74.86 72.15 74.71 72.22L73.09 73.07L73.4 71.26C73.46 70.94 73.35 70.6 73.11 70.38L71.8 69.1L73.61 68.84C73.94 68.79 74.22 68.59 74.36 68.29L75.17 66.65L75.98 68.29C76.13 68.58 76.41 68.79 76.73 68.84L78.54 69.1L77.23 70.38C76.99 70.61 76.89 70.94 76.94 71.26L77.25 73.07L75.64 72.22Z" fill={color2}/>
                </svg>
                </button>
                <button onClick={() => setNote(3)}>
                <svg width="177" height="169" viewBox="0 0 177 169" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => handleClick(3)}>
                <path d="M88.5 0L108.369 58.3881H172.669L120.65 94.4739L140.519 152.862L88.5 116.776L36.481 152.862L56.3505 94.4739L4.3315 58.3881H68.6305L88.5 0Z" fill="#DDB03B" fillOpacity="1"/>
                <path d="M106.19 70.33L104.16 70.66L104.73 64.09C104.77 63.67 104.54 63.27 104.15 63.1C103.77 62.92 103.32 63 103.02 63.3C102.96 63.36 96.96 69.32 87.14 72.19C84.48 72.97 82.32 74.8 81.22 77.23C78.97 82.18 81.17 86.81 87.1 89.59C87.55 89.8 87.88 90.21 87.99 90.67V97.12H86.56C81.7 97.12 77.74 101.07 77.74 105.94V112C77.74 112.55 78.19 113 78.74 113H105.35C105.9 113 106.35 112.55 106.35 112V105.94C106.35 101.08 102.4 97.12 97.53 97.12H96.1V97.05C100.3 96.91 103.67 93.46 103.67 89.23V87.64C105.15 87.05 106.2 85.61 106.2 83.93C106.2 83.38 105.75 82.93 105.2 82.93H103.67V76.4L107.14 71.92C107.39 71.6 107.42 71.15 107.21 70.8C107 70.45 106.59 70.27 106.19 70.33ZM94.1 96.89V100.95C94.1 102.08 93.18 103 92.05 103C90.92 103 90 102.08 90 100.95V94.58C91.08 95.74 92.5 96.56 94.1 96.89ZM97.53 99.12C101.29 99.12 104.35 102.18 104.35 105.94V111H79.74V105.94C79.74 102.18 82.8 99.12 86.56 99.12H87.99V100.95C87.99 103.18 89.81 105 92.04 105C94.28 105 96.09 103.18 96.09 100.95V99.12H97.53ZM102.2 85.93C101.46 85.93 100.82 85.53 100.47 84.93H103.93C103.59 85.53 102.94 85.93 102.2 85.93ZM99.21 82.94H98.1H92.1H90.81L90.98 82.21C91.22 81.21 92.09 80.49 93.09 80.45C97.15 80.29 100.01 79.03 101.66 78.03V82.94H99.21ZM96.83 84.94C96.48 85.54 95.84 85.94 95.1 85.94C94.36 85.94 93.72 85.54 93.37 84.94H96.83ZM101.93 75.38C101.54 75.72 98.54 78.22 93.01 78.44C91.11 78.52 89.47 79.87 89.03 81.73L88.56 83.69C88.49 83.99 88.56 84.3 88.75 84.54C88.94 84.78 89.23 84.92 89.53 84.92H91.23C91.68 86.64 93.23 87.92 95.09 87.92C96.65 87.92 97.98 87.02 98.64 85.72C99.22 86.87 100.33 87.69 101.66 87.87V89.22C101.66 92.43 99.04 95.05 95.83 95.05H95.7C92.91 95.05 90.5 93.07 89.98 90.33C89.97 90.27 89.94 90.22 89.93 90.17C89.92 90.15 89.92 90.14 89.91 90.12C89.64 89.1 88.94 88.22 87.96 87.76C85.09 86.41 80.64 83.36 83.05 78.03C83.91 76.14 85.6 74.7 87.71 74.09C94.8 72.02 99.93 68.47 102.53 66.37L102.07 71.74C102.04 72.05 102.16 72.35 102.39 72.56C102.62 72.77 102.93 72.86 103.23 72.81L104.02 72.68L101.93 75.38Z" fill={color3}/>
                <path d="M78.59 75.9C78.8 75.9 79 75.84 79.18 75.71C79.49 75.49 79.64 75.11 79.58 74.73L79.02 71.45L81.41 69.12C81.68 68.85 81.78 68.46 81.66 68.1C81.54 67.74 81.23 67.47 80.85 67.42L77.55 66.94L76.07 63.95C75.73 63.27 74.61 63.27 74.28 63.95L72.8 66.94L69.5 67.42C69.12 67.47 68.81 67.74 68.69 68.1C68.57 68.46 68.67 68.86 68.94 69.12L71.33 71.45L70.77 74.73C70.71 75.11 70.86 75.48 71.17 75.71C71.48 75.93 71.89 75.96 72.22 75.79L75.17 74.24L78.12 75.79C78.27 75.87 78.43 75.9 78.59 75.9ZM75.64 72.22C75.49 72.14 75.34 72.11 75.18 72.11C75.02 72.11 74.86 72.15 74.71 72.22L73.09 73.07L73.4 71.26C73.46 70.94 73.35 70.6 73.11 70.38L71.8 69.1L73.61 68.84C73.94 68.79 74.22 68.59 74.36 68.29L75.17 66.65L75.98 68.29C76.13 68.58 76.41 68.79 76.73 68.84L78.54 69.1L77.23 70.38C76.99 70.61 76.89 70.94 76.94 71.26L77.25 73.07L75.64 72.22Z" fill={color3}/>
                </svg>
                </button>
                <button onClick={() => setNote(4)}>
                <svg width="177" height="169" viewBox="0 0 177 169" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => handleClick(4)}>
                <path d="M88.5 0L108.369 58.3881H172.669L120.65 94.4739L140.519 152.862L88.5 116.776L36.481 152.862L56.3505 94.4739L4.3315 58.3881H68.6305L88.5 0Z" fill="#DDB03B" fillOpacity="1"/>
                <path d="M106.19 70.33L104.16 70.66L104.73 64.09C104.77 63.67 104.54 63.27 104.15 63.1C103.77 62.92 103.32 63 103.02 63.3C102.96 63.36 96.96 69.32 87.14 72.19C84.48 72.97 82.32 74.8 81.22 77.23C78.97 82.18 81.17 86.81 87.1 89.59C87.55 89.8 87.88 90.21 87.99 90.67V97.12H86.56C81.7 97.12 77.74 101.07 77.74 105.94V112C77.74 112.55 78.19 113 78.74 113H105.35C105.9 113 106.35 112.55 106.35 112V105.94C106.35 101.08 102.4 97.12 97.53 97.12H96.1V97.05C100.3 96.91 103.67 93.46 103.67 89.23V87.64C105.15 87.05 106.2 85.61 106.2 83.93C106.2 83.38 105.75 82.93 105.2 82.93H103.67V76.4L107.14 71.92C107.39 71.6 107.42 71.15 107.21 70.8C107 70.45 106.59 70.27 106.19 70.33ZM94.1 96.89V100.95C94.1 102.08 93.18 103 92.05 103C90.92 103 90 102.08 90 100.95V94.58C91.08 95.74 92.5 96.56 94.1 96.89ZM97.53 99.12C101.29 99.12 104.35 102.18 104.35 105.94V111H79.74V105.94C79.74 102.18 82.8 99.12 86.56 99.12H87.99V100.95C87.99 103.18 89.81 105 92.04 105C94.28 105 96.09 103.18 96.09 100.95V99.12H97.53ZM102.2 85.93C101.46 85.93 100.82 85.53 100.47 84.93H103.93C103.59 85.53 102.94 85.93 102.2 85.93ZM99.21 82.94H98.1H92.1H90.81L90.98 82.21C91.22 81.21 92.09 80.49 93.09 80.45C97.15 80.29 100.01 79.03 101.66 78.03V82.94H99.21ZM96.83 84.94C96.48 85.54 95.84 85.94 95.1 85.94C94.36 85.94 93.72 85.54 93.37 84.94H96.83ZM101.93 75.38C101.54 75.72 98.54 78.22 93.01 78.44C91.11 78.52 89.47 79.87 89.03 81.73L88.56 83.69C88.49 83.99 88.56 84.3 88.75 84.54C88.94 84.78 89.23 84.92 89.53 84.92H91.23C91.68 86.64 93.23 87.92 95.09 87.92C96.65 87.92 97.98 87.02 98.64 85.72C99.22 86.87 100.33 87.69 101.66 87.87V89.22C101.66 92.43 99.04 95.05 95.83 95.05H95.7C92.91 95.05 90.5 93.07 89.98 90.33C89.97 90.27 89.94 90.22 89.93 90.17C89.92 90.15 89.92 90.14 89.91 90.12C89.64 89.1 88.94 88.22 87.96 87.76C85.09 86.41 80.64 83.36 83.05 78.03C83.91 76.14 85.6 74.7 87.71 74.09C94.8 72.02 99.93 68.47 102.53 66.37L102.07 71.74C102.04 72.05 102.16 72.35 102.39 72.56C102.62 72.77 102.93 72.86 103.23 72.81L104.02 72.68L101.93 75.38Z" fill={color4}/>
                <path d="M78.59 75.9C78.8 75.9 79 75.84 79.18 75.71C79.49 75.49 79.64 75.11 79.58 74.73L79.02 71.45L81.41 69.12C81.68 68.85 81.78 68.46 81.66 68.1C81.54 67.74 81.23 67.47 80.85 67.42L77.55 66.94L76.07 63.95C75.73 63.27 74.61 63.27 74.28 63.95L72.8 66.94L69.5 67.42C69.12 67.47 68.81 67.74 68.69 68.1C68.57 68.46 68.67 68.86 68.94 69.12L71.33 71.45L70.77 74.73C70.71 75.11 70.86 75.48 71.17 75.71C71.48 75.93 71.89 75.96 72.22 75.79L75.17 74.24L78.12 75.79C78.27 75.87 78.43 75.9 78.59 75.9ZM75.64 72.22C75.49 72.14 75.34 72.11 75.18 72.11C75.02 72.11 74.86 72.15 74.71 72.22L73.09 73.07L73.4 71.26C73.46 70.94 73.35 70.6 73.11 70.38L71.8 69.1L73.61 68.84C73.94 68.79 74.22 68.59 74.36 68.29L75.17 66.65L75.98 68.29C76.13 68.58 76.41 68.79 76.73 68.84L78.54 69.1L77.23 70.38C76.99 70.61 76.89 70.94 76.94 71.26L77.25 73.07L75.64 72.22Z" fill={color4}/>
                </svg>
                </button>
                <button onClick={() => setNote(5)}>
                <svg width="177" height="169" viewBox="0 0 177 169" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => handleClick(5)}>
                <path d="M88.5 0L108.369 58.3881H172.669L120.65 94.4739L140.519 152.862L88.5 116.776L36.481 152.862L56.3505 94.4739L4.3315 58.3881H68.6305L88.5 0Z" fill="#DDB03B" fillOpacity="1"/>
                <path d="M106.19 70.33L104.16 70.66L104.73 64.09C104.77 63.67 104.54 63.27 104.15 63.1C103.77 62.92 103.32 63 103.02 63.3C102.96 63.36 96.96 69.32 87.14 72.19C84.48 72.97 82.32 74.8 81.22 77.23C78.97 82.18 81.17 86.81 87.1 89.59C87.55 89.8 87.88 90.21 87.99 90.67V97.12H86.56C81.7 97.12 77.74 101.07 77.74 105.94V112C77.74 112.55 78.19 113 78.74 113H105.35C105.9 113 106.35 112.55 106.35 112V105.94C106.35 101.08 102.4 97.12 97.53 97.12H96.1V97.05C100.3 96.91 103.67 93.46 103.67 89.23V87.64C105.15 87.05 106.2 85.61 106.2 83.93C106.2 83.38 105.75 82.93 105.2 82.93H103.67V76.4L107.14 71.92C107.39 71.6 107.42 71.15 107.21 70.8C107 70.45 106.59 70.27 106.19 70.33ZM94.1 96.89V100.95C94.1 102.08 93.18 103 92.05 103C90.92 103 90 102.08 90 100.95V94.58C91.08 95.74 92.5 96.56 94.1 96.89ZM97.53 99.12C101.29 99.12 104.35 102.18 104.35 105.94V111H79.74V105.94C79.74 102.18 82.8 99.12 86.56 99.12H87.99V100.95C87.99 103.18 89.81 105 92.04 105C94.28 105 96.09 103.18 96.09 100.95V99.12H97.53ZM102.2 85.93C101.46 85.93 100.82 85.53 100.47 84.93H103.93C103.59 85.53 102.94 85.93 102.2 85.93ZM99.21 82.94H98.1H92.1H90.81L90.98 82.21C91.22 81.21 92.09 80.49 93.09 80.45C97.15 80.29 100.01 79.03 101.66 78.03V82.94H99.21ZM96.83 84.94C96.48 85.54 95.84 85.94 95.1 85.94C94.36 85.94 93.72 85.54 93.37 84.94H96.83ZM101.93 75.38C101.54 75.72 98.54 78.22 93.01 78.44C91.11 78.52 89.47 79.87 89.03 81.73L88.56 83.69C88.49 83.99 88.56 84.3 88.75 84.54C88.94 84.78 89.23 84.92 89.53 84.92H91.23C91.68 86.64 93.23 87.92 95.09 87.92C96.65 87.92 97.98 87.02 98.64 85.72C99.22 86.87 100.33 87.69 101.66 87.87V89.22C101.66 92.43 99.04 95.05 95.83 95.05H95.7C92.91 95.05 90.5 93.07 89.98 90.33C89.97 90.27 89.94 90.22 89.93 90.17C89.92 90.15 89.92 90.14 89.91 90.12C89.64 89.1 88.94 88.22 87.96 87.76C85.09 86.41 80.64 83.36 83.05 78.03C83.91 76.14 85.6 74.7 87.71 74.09C94.8 72.02 99.93 68.47 102.53 66.37L102.07 71.74C102.04 72.05 102.16 72.35 102.39 72.56C102.62 72.77 102.93 72.86 103.23 72.81L104.02 72.68L101.93 75.38Z" fill={color5}/>
                <path d="M78.59 75.9C78.8 75.9 79 75.84 79.18 75.71C79.49 75.49 79.64 75.11 79.58 74.73L79.02 71.45L81.41 69.12C81.68 68.85 81.78 68.46 81.66 68.1C81.54 67.74 81.23 67.47 80.85 67.42L77.55 66.94L76.07 63.95C75.73 63.27 74.61 63.27 74.28 63.95L72.8 66.94L69.5 67.42C69.12 67.47 68.81 67.74 68.69 68.1C68.57 68.46 68.67 68.86 68.94 69.12L71.33 71.45L70.77 74.73C70.71 75.11 70.86 75.48 71.17 75.71C71.48 75.93 71.89 75.96 72.22 75.79L75.17 74.24L78.12 75.79C78.27 75.87 78.43 75.9 78.59 75.9ZM75.64 72.22C75.49 72.14 75.34 72.11 75.18 72.11C75.02 72.11 74.86 72.15 74.71 72.22L73.09 73.07L73.4 71.26C73.46 70.94 73.35 70.6 73.11 70.38L71.8 69.1L73.61 68.84C73.94 68.79 74.22 68.59 74.36 68.29L75.17 66.65L75.98 68.29C76.13 68.58 76.41 68.79 76.73 68.84L78.54 69.1L77.23 70.38C76.99 70.61 76.89 70.94 76.94 71.26L77.25 73.07L75.64 72.22Z" fill={color5}/>
                </svg>
                </button>
            </div>
        </div>

    )
}

export default Note;