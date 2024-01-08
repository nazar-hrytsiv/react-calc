import React, {useState} from 'react'

export default function App() {
    const [result, setResult] = useState('')
    const [hint, setHint] = useState('_')

    const btnHandler = (e) => {
        setResult(result + e.target.name)
    }

    const clearResult = () => {
        setResult('')
    }

    const backspace = () => {
        setResult(result.slice(0, -1))
    }

    const calcResult = () => {
        try {
            setResult(eval(result).toString())
        } catch(err) {
            setResult('')
            setHint('Error')
        }
    }

    document.addEventListener('keyup', (e) => {
        switch (e.keyCode) {
            case 8:
                backspace();
                break;
            case 187:
                calcResult();
                break;
            case 46:
                clearResult();
                break;
            default:
                break;
        }
    })

    return (
        <>
            <div className="container">
                <input id="resultBox" type="text" value={result} placeholder={hint} readOnly={true}/>
                <div className="keypad">
                    <button id="clear" className="btn hightlight" onClick={clearResult}>Clear</button>
                    <button className="btn hightlight" onClick={backspace}>C</button>
                    <button name="/" onClick={btnHandler} className="btn hightlight">&divide;</button>
                    <button name="7" onClick={btnHandler} className="btn">7</button>
                    <button name="8" onClick={btnHandler} className="btn">8</button>
                    <button name="9" onClick={btnHandler} className="btn">9</button>
                    <button name="*" onClick={btnHandler} className="btn hightlight">&times;</button>
                    <button name="4" onClick={btnHandler} className="btn">4</button>
                    <button name="5" onClick={btnHandler} className="btn">5</button>
                    <button name="6" onClick={btnHandler} className="btn">6</button>
                    <button name="-" onClick={btnHandler} className="btn hightlight">&ndash;</button>
                    <button name="1" onClick={btnHandler} className="btn">1</button>
                    <button name="2" onClick={btnHandler} className="btn">2</button>
                    <button name="3" onClick={btnHandler} className="btn">3</button>
                    <button name="+" onClick={btnHandler} className="btn hightlight">+</button>
                    <button name="0" onClick={btnHandler} className="btn">0</button>
                    <button name="." onClick={btnHandler} className="btn">.</button>
                    <button id="result" className="btn hightlight" onClick={calcResult}>=</button>
                </div>
            </div>
        </>
    )
}

