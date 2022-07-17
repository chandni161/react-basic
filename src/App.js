import { Fragment } from 'react';
import './App.css';
import Button from './components/Button/Button';

export const App = () => {
    const btn1Hander = () => {
        console.log('btn 1');
    };
    const btn2Hander = () => {
        console.log('btn 2');
    };
    const btn3Hander = () => {
        console.log('btn 3');
    };
    return (
        <Fragment>
            <div className='container'>Learning React</div>;
            <Button onClick={btn1Hander}>Prev</Button>
            <Button onClick={btn2Hander}>Next</Button>
            <Button onClick={btn3Hander}>Submit</Button>
        </Fragment>
    );
};

export default App;
