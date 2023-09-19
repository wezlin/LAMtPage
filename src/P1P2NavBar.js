import {useState, useEffect} from "react";
import NavBar from './NavBar';

export default function P1P2NavBar(){

	const [scrollY, setScrollY] = useState(false);
	useEffect(() => {
		const handleScroll = () =>{
			const element = document.getElementById('p1p5NavBarid');
			if (element){
				const rect = element.getBoundingClientRect();
				if (rect.top <= 0){
					setScrollY(true);
				}
				else {
					setScrollY(false);
				}
			}	
		};

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
				opacity: "0",
				zIndex: "100",
				top: "0",
				position: scrollY === true ? "relative":"absolute",
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
				zIndex: scrollY ===true?  "1000": "100",
				top: "0",
				position: scrollY ===true? "fixed":"relative",
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

