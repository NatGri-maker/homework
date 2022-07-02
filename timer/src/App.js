import {Button, Container} from "react-bootstrap";
import {useEffect, useState} from "react";

let setId;

function App() {
    const startingValue = 1200;


    const [value, setValue] = useState(startingValue);
    const [tick, setTick] = useState(false);

    useEffect(() => {
        if (tick && value) {
            clearInterval(setId)
            setId = setInterval(() => {
                setValue((prevState) => {
                    return prevState - 1;
                })
            }, 1000)
        } else {
            setTick(false);
            clearInterval(setId);
        }
    }, [tick, value])

    const startPause = () => {
        tick ? setTick(false) : setTick(true);
    };

    const buttonChangeStartOrPause = tick ? "Pause" : "Start";

    const reset = () => {
        setTick(false);
        setValue(startingValue);
    }


    const showTime = (value) => {
        let h = Math.floor(value / 3600);
        let m = Math.floor(value % 3600 / 60);
        let s = value % 60;
        let HH, MM, SS;
        h < 10 ? HH = `0${h}` : HH = h;
        m < 10 ? MM = `0${m}` : MM = m;
        s < 10 ? SS = `0${s}` : SS = s;
        return `${HH}:${MM}:${SS}`;
    }
    return (
        <Container className="border border-danger text-center">
            <div>Timer</div>
            <div>{showTime(value)}</div>
            <Button variant="primary" className="m-2" onClick={startPause}>{buttonChangeStartOrPause}</Button>
            <Button variant="secondary" className="m-2" onClick={reset}>Reset</Button>


        </Container>
    );
}

export default App;
