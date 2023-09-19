import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import P1Home from './P1Home';
import P1P2NavBar from './P1P2NavBar';
import P2History from './P2History';
import P3Clime from './P3Clime';
import BottomBar from './BottomBar';
// import BottomBarWez from './BottomBarWez';
import FixedVeil from './FixedVeil';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
		<FixedVeil/>
		 <div style={{ display: 'flex', flexDirection: 'column' }}>
    	<P1Home/>
		<P1P2NavBar/>
		<P2History/>
		<P3Clime/>
		<BottomBar/>
		{/* <BottomBarWez/> */}
		</div>
  </React.StrictMode>
);

