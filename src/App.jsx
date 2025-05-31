import { useState } from 'react';
import './App.scss';

import TriangleBlue from './components/triangle/TriangleBlue.jsx';
import TriangleYellow from './components/triangle/TriangleYellow.jsx';
//import RefSquare from './components/Square/RefSquare.js';
import SquareOrange from './components/Square/SquareOrange.jsx';
import BlueSphere from './components/Sphere/SphereBlue.jsx';
import SquarePurple from './components/Square/SquarePurple.jsx';
import RectangleGreen from './components/Square/RectangleGreen.jsx';
import SquareBlack from './components/Square/SquareBlack';
import SquarePink from './components/Square/SquarePink';
import SquareYellow from './components/Square/SquareYellow';
import SquareGrey from './components/Square/SquareGrey';
import { Slider } from '@/components/ui/slider';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

function App() {
  const timeText = new Date().getFullYear();
  const [speed, setSpeed] = useState(4);
  const [selectedValue, setSelectedValue] = useState('');
  // Select an element
  const element = document.body;

  // Set a CSS variable on that element
  element.style.setProperty('--animation-time', `${speed}s`);
  if (selectedValue === 'small') {
    element.style.setProperty('--base-pixel', `10px`);
  } else if (selectedValue === 'big') {
    element.style.setProperty('--base-pixel', `50px`);
  } else {
    element.style.setProperty('--base-pixel', `30px`);
  }

  return (
    <div style={{ margin: '20px' }}>
      <div style={{ width: '300px', margin: '20px' }}></div>
      <section style={{ margin: '20px' }}>
        <h1>CSS is Fun</h1> <br />
        <h2 style={{ marginBottom: '20px' }}>
          Pure css version - feel free to set up the speed ! :)
        </h2>
        <div style={{ marginBottom: '20px' }}>
          <Slider
            defaultValue={[speed]}
            min={1}
            max={10}
            step={1}
            onValueChange={(value) => setSpeed(value[0])}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ToggleGroup
            type="single"
            value={selectedValue}
            onValueChange={(value) => setSelectedValue(value)}
          >
            <ToggleGroupItem value="small">
              A little bit smaller
            </ToggleGroupItem>
            <ToggleGroupItem value="big">A little bit bigger</ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div
          style={{
            padding: '100px',
            position: 'relative',
            marginRight: 'calc(50% + 75px)', // meeh
            marginLeft: 'calc(50% - 75px)',
            marginBottom: '50px',
            //backgroundColor: 'lightgreen',
          }}
        >
          <div className="pos pos0">
            <RectangleGreen />
          </div>
          <div className="pos pos1">
            <TriangleBlue />
          </div>
          <div className="pos pos2">
            <SquarePurple />
            <BlueSphere />
          </div>
          <div className="pos pos3">
            <SquareBlack />
            <SquarePink />
            <SquareYellow />
            <SquareGrey />
          </div>
          <div className="pos pos4">
            <SquareOrange />
            <TriangleYellow />
          </div>
        </div>
        <h2>
          Original Version below (from
          <a
            style={{ paddingLeft: '3px' }}
            href="https://www.metalab.co/projects/otter"
          >
            Metalab.co
          </a>
          )
        </h2>
        <figure>
          <img
            src="https://assets.website-files.com/5e7911787de4f2e42b3769fb/5e7911787de4f216b6376b3f_blocks.gif"
            alt=""
            className="otter-gif-animation is-blocks"
          />
        </figure>
      </section>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        Copyright © 2017 -
        <span style={{ paddingInline: '3px' }}>{timeText} </span>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://gabriel-somogyi.vercel.app/"
          style={{ paddingLeft: '3px' }}
        >
          Gabriel S.
        </a>
      </div>
    </div>
  );
}

export default App;
