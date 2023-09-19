
import {useState} from 'react';
import Picture from './Picture';
import SectionTitle from './SectionTitle';
import './index.css';



export default function P3Crime(){
	
	// var m1Select = true;// 
	const [getMount, setMount] = useState(0);

	const clickMountain  = (num)=>{
		setMount(num);
	}

	const text = `Cras scelerisque id quam 
	sed dignissim Pellentesque urna nunc, 
	gravida quis hendrerit ac, tristique ut quam. 
	Vivamus suscipit dignissim tortor nec congue.`;
 
	const button1Style= {
		textDecoration: "underline",
		whiteSpace: "nowrap",
		paddingTop:"10px",
		paddingBottom:"10px",
		fontWeight: "800",
		cursor: "pointer",
		background: getMount === 0 ?  "#b0b4b2": "#414f6b",	
  		border: "none",
		color: getMount === 0 ? "#414f6b": "#b0b4b2",
	};
	const button2Style= {
		textDecoration: "underline",
		whiteSpace: "nowrap",
		paddingTop:"10px",
		paddingBottom:"10px",
		fontWeight: "800",
		cursor: "pointer",
		background: getMount ===1 ? "#b0b4b2": "#414f6b",	
  		border: "none",
		color: getMount ===1? "#414f6b": "#b0b4b2",
	};
	

return (
		<div id = "section3" style= {{
			position:"relative",
			width: "100%",
			}}>
			<div className= {"containerStyle60percentCenter"}> 
				<SectionTitle T1Name={"02"} 
							  T2Name={"CLIMB"}
							  T3Text={text}/>
			
			</div>
			<div style = {{
				backgroundColor:"#414f6b",
				width: "100%",
				// height: "50px",
			}}>
				<div className= {"containerStyle60percentCenter"}
					style= {{
						display: "flex",
						// gap: "32px",
						fontSize: "20px",
					}}
					id = "mountainStringid"> 

						<button style={button1Style} onClick = {()=>clickMountain(0) }>MOUNTAIN 1</button>
						<button style={button2Style} onClick = {()=>clickMountain(1) }>MOUNTAIN 2</button>
					
								

				</div>

			</div>

			<div>
				<Picture imageName="background3.png"
						 style= {{
							position:"absolute",
							width: "100%",
							height: "auto",
							zIndex: "-1",
							opacity: getMount=== 0? 1:0,
							transition: "opacity 1s",
					 	}}/>
				<Picture imageName="background4.png"
						 style= {{
							position:"absolute",
							width: "100%",
							height: "auto",
							zIndex: "-1",
							opacity: getMount=== 0? 0:1,
							transition: "opacity 1s",
					 	}}/>		
				<div className= {"containerStyle60percentCenter"}
					style={{
						paddingTop: "50px",					
					}}>
					<Schedule/>
				</div>
				
				<Picture imageName="background3.png"
						 style= {{
							position:"relative",
							width: "100%",
							height: "auto",
							zIndex: "-1",
							opacity: "0",
							marginTop: "-275px",
					 	}}/>

			</div>
		</div>
	)

}


function Schedule() {


	const containerStyle = {
		backgroundColor: "rgba(255,255,255,0.5)",
		height: "50%",
		width: "auto",
		maxWidth: "60%",
	};

	return(
	<div style={containerStyle}
		 id="scheduleContainerid">
		<div style ={{
			margin: "15px",
			padding: "10px",
			whiteSpace: "nowrap",

		}}>
			<div style={{
				fontSize: "25px",
				fontWeight:"700",
				paddingBottom:"5px",
				color: "#414f6b",
				
				}}
				id="scheduleTitleid">
				SCHEDULE
			</div>
			<div style= {{color: "gray",}}>
			<div>25 Nov 2016      Vestibulum</div>
			<div>28 Nov 2016      Vestibulum</div>
			<br/>
			<div>18 Dec 2016      Vestibulum</div>
			<br/>
			<div>7 Jan 2016      Vestibulum</div>
			</div>
		</div>
	</div>
	)
}
