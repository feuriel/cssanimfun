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

function App() {
  const timeText = new Date().getFullYear();
  return (
    <div style={{ margin: '20px' }}>
      <section style={{ margin: '20px' }}>
        <h1>CSS is Fun</h1> <br />
        <h2>Pure css version :)</h2>
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
          Original Version (from
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
       - Copyright © 2017 -<span style={{paddingInline: '3px'}}>{timeText} </span>
       Gabriel S -
      <a href="" style={{paddingLeft: '3px'}}
        >R Studio</a
      >
    </div>
    </div>
  );
}

export default App;
