import React from 'react';
import { render } from 'react-dom';
import './App.css';
import spacetime from 'spacetime';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';

let s = spacetime.now();

const Timezone = (props) => {
  const d = s.goto(props.zone);
  const rs = props.name + ' ' + d.time() + ' GMT ' + d.offset() / 60;
  return rs;
};

const App = () => (
  <div className='App'>
    <header className='App-header'>
      <ReactScrollWheelHandler
        upHandler={() => (s = s.subtract(1, 'hours'))}
        downHandler={() => (s = s.add(1, 'hours'))}
      >
        <p>
          <Timezone zone='Australia/Sydney' name='Newcastle' />
        </p>
        <p>
          <Timezone zone='Australia/Brisbane' name='Brisbane' />
        </p>
        <p>
          <Timezone zone='Asia/Hong_Kong' name='Shenzhen' />
        </p>
        <p>
          <Timezone zone='Asia/Kolkata' name='Gurgaon' />
        </p>
        <p>
          <Timezone zone='Europe/London' name='London' />
        </p>
        <p>
          <Timezone zone='America/Chicago' name='Austin' />
        </p>
        <p>
          <Timezone zone='America/Denver' name='Denver' />
        </p>
        <p>
          <Timezone zone='America/Los_Angeles' name='Seattle' />
        </p>
        {/* <p>
          <button onClick={() => (s = s.add(1, 'hours'))}>
            Increment Hours
          </button>
        </p>
        <p>
          <button onClick={() => (s = s.subtract(1, 'hours'))}>
            Decrement Hours
          </button>
        </p> */}
        <p>
          <button onClick={() => (s = spacetime.now())}>Reset</button>
        </p>
      </ReactScrollWheelHandler>
    </header>
  </div>
);

render(<App />, document.getElementById('root'));

export default App;
