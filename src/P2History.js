import {useState, useEffect} from 'react';
import Picture from './Picture';
import SectionTitle from './SectionTitle';
import './index.css';
export default function P2History(){
	
	const P2Style = {
		position: "relative",
	};

	const text = `
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante viverra, rutrum erat rutrum, consectetur mi. Proin at
	maximus est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras scelerisque id quam sed dignissim
	Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue.
  `;

	return (
		<div id = "section2" style={P2Style}>
			{/* <Picture imageName="background2.png"
					 style= {{
						width: "100%",
						height: "auto",
						position:"absolute",
						zIndex: "-3",
					 }}/>			 */}
			<div className={"containerStyle60percentCenter"}>
				<div style={{
					position: "absolute",
					zIndex: "100",
					width: "60%",
				}}>
				<SectionTitle T1Name={"01"} 
						  T2Name={"History"} 
						  T3Text= {text}/>	
				</div>
			</div>

			<Picture imageName="background2.png"
					 style= {{
						width: "100%",
						height: "auto",
						position:"relative",
						opacity: "1",
					 }}/>
			<Carousel/> 
		</div>
	)
}


function Carousel(){

	const slideContainer = {
		position : "relative",
		display:"block",
		backgroundColor:"#414f6b",
		width: "100%",
		// height:"250px",
		marginTop: "-10px",
	};

	const [dotState, setDotState] = useState(0);


	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect( ()=> {
		
		const slidesA = document.getElementById('slidesA');
		slidesA.scrollTo({
			left: scrollPosition,
			behavior: 'smooth',
		})	;
	}, [scrollPosition]);

	const handleSlideAScroll = (num) => {
		const slidesA = document.getElementById('slidesA');
		setScrollPosition(  (slidesA.scrollWidth)/3 * (num));
		setDotState(num);
	};


	return (
		<div style= {slideContainer}>
			<Slides dotState={dotState} 
			  setDotState={setDotState} />
			<Dot dotState={dotState} 
			  setDotState={setDotState}
			  handleSlideAScroll={handleSlideAScroll}/>
		</div>
	)
}

function Slides({dotState, setDotState}){
	const carouselImages= [
		"slide1.png",
		"slide2.png",
		"slide3.png",
		"slide4.png",
		"slide1.png",
		"slide2.png",
		"slide3.png",
		"slide4.png",

	];
	const slideStyle = {
		height: "120px",
		width:"auto",	
	};
	const slidesStyle = {
		display: "flex",
		width: "100%",
		gap: "5px",
		paddingTop: "50px",
		paddingBottom: "30px",
		alignItems: "center",
		justifyContent: "flex-start", 
		overflow: "scroll",

	};

	useEffect(()=>{
		const slidesA = document.getElementById('slidesA');//get slideA ID
		const handleScroll = () =>{
			const scrollPosition = slidesA.scrollLeft + 160; //+160 for the approximate a slide width
			const contentWidth = slidesA.scrollWidth;
        	const sectionWidth = contentWidth  /3; //here divided by 3 is because our dots component have 3 dot to ctrl this scroll.
			setDotState( Math.floor( scrollPosition/ (sectionWidth) )   ); //to re render the dots component
		};

		slidesA.addEventListener('scroll', handleScroll);
	  
		return () => {
		  slidesA.removeEventListener('scroll', handleScroll);
		};
	},[]);

	return (
			<div className={"containerStyle60percentCenter"}
				style = {{
				// backgroundColor: "pink",
			}}>
					 <div id = "slidesA" style={slidesStyle} >
						
					 {carouselImages.map((image, index) => (
						<Picture key={index} imageName={image} style={slideStyle}/>
					 ))
					}
						
					</div>
			</div>
	)
}

function Dot({handleSlideAScroll,dotState, setDotState}){


	// const dotClick = (num)=>{
	// 	setDotState(num);
	// };

	const dotStyle1 = {
		width:"10px",
		height:"10px",
		borderRadius: "50%",
		backgroundColor : dotState=== 0? "white" : "gray",
		cursor: "pointer",
		transition: "background-color 0.3s linear",
	};
	const dotStyle2 = {
		width:"10px",
		height:"10px",
		borderRadius: "50%",
		backgroundColor : dotState=== 1? "white" : "gray",
		cursor: "pointer",
		transition: "background-color 0.3s linear",
	};
	const dotStyle3 = {
		width:"10px",
		height:"10px",
		borderRadius: "50%",
		backgroundColor : dotState=== 2? "white" : "gray",
		cursor: "pointer",
		transition: "background-color 0.3s linear",
	};

	return(
		<div style= {{width: "100%"}}>
		<div style= {{
			display: "flex",
			gap: "8px",
			width: "50px",
			height: "20px",
			marginLeft : "auto",
			marginRight: "auto",
			paddingBottom: "20px",
			// backgroundColor: "pink",
			alignItems: "center",
			}}>
			<div style = {dotStyle1} onClick= {()=> handleSlideAScroll(0)}></div>
			<div style = {dotStyle2} onClick= {()=> handleSlideAScroll(1)}></div>
			<div style = {dotStyle3} onClick= {()=> handleSlideAScroll(2)}></div>
		</div>
		</div>
	)
}