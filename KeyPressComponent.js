import React, { useEffect, useState } from 'react';

const KeyPressComponent = () => {
    const [pressedKeys, setPressedKeys] = useState({});

    const setKey = (event, status) => {
        const code = event.keyCode;
        let key;

        switch(code) {
            case 32:
                key = 'SPACE'; break;
            case 37:
                key = 'LEFT'; break;
            case 38:
                key = 'UP'; break;
            case 39:
                key = 'RIGHT'; break;
            case 40:
                key = 'DOWN'; break;
            case 32:
                key = 'JUMP'; break;
            case 90:
                key = 'RUN'; break;
            default:
                key = String.fromCharCode(code);
        }

        setPressedKeys(prevKeys => ({
            ...prevKeys,
            [key]: status
        }));
    };

    useEffect(() => {
        const handleKeyDown = (e) => setKey(e, true);
        const handleKeyUp = (e) => setKey(e, false);

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    return (
        <div>
            <h1>Key Press Component</h1>
            <pre>{JSON.stringify(pressedKeys, null, 2)}</pre>
        </div>
    );
};

export default KeyPressComponent;