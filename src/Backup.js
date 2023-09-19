import {useState, useEffect} from "react";
import NavBar from './NavBar';

export default function P1p5_NavBar(){

	const [scrollY, setScrollY] = useState(0);

	const handleScroll  = () =>{
		setScrollY(window.scrollY);
	}

	useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

	  

    return (
		<div id= "p1p5NavBarid">
<div style= {{
				width:"100%",
				backgroundColor: "white",
				opacity: "1",
				zIndex:"1000",
				// top: "0",
				position: scrollY > 665? "relative":"absolute",
			}}>
				<div 
					className= {"containerStyle60percentCenter"}
				> 
					<NavBar navBarType={"P2"}/>
				</div>
			</div>
			<div style= {{
				width:"100%",
				backgroundColor: "white",
				opacity: "1",
				zIndex:"1000",
				top: "0",
				position: scrollY > 665? "fixed":"relative",
			}}>
				<div 
					className= {"containerStyle60percentCenter"}
				> 
					<NavBar navBarType={"P2"}/>
				</div>
			</div>
		</div>
		)
}

