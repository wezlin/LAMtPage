
import Picture from './Picture';
import Logo from './Logo';
import NavBar from './NavBar';
import './index.css';
export default function P1Home(){


	return (
		<div>		
			<div className={"containerStyle60percentCenter"}>
				<NavBar navBarType={"P1"}/>
			</div>

			<P1BG/>
			<Picture imageName="background1.png"
					  style={{
						position: "relative",
						zIndex: "-3",
						width: "100%",
						height: "auto", 
						maxHeight: "660",
						top: "0px",
						opacity: "0",
						marginBottom: "-90px",
					  }}/>	  

		</div>
	)
}


function P1BG(){
	return (
		<div style={{
			width: "100vw",
			height: "auto",
			}}>
			<Picture imageName="background1.png"
					  style={{
						position: "absolute",
						zIndex: "-3",
						width: "100%",
						height: "auto", 
						maxHeight: "660",
						top: "0px",
					  }}/>
			<Picture imageName="background1-removebg.png" 
					 style={{
						position: "absolute",
						zIndex: "-1",
						width: "100%",
						height: "auto",  
						top: "0px",
					 }}/>
			<Logo logoType ={"logoP1Large"}/>	

		</div>
	)
}