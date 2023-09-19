
import Picture from './Picture';
import './index.css';
import Logo from './Logo';

export default function BottomBar(){



	const navBarStyle= {
		display: "flex",
		width:"100%",
		height:"auto",
        // backgroundColor: "pink",
		alignItems: "center",
        justifyContent: "center",
	};

	const leftStyle = {
		width:"50%",
		display: "flex",
		alignItems: "center",
		gap: "10px",
	};
	const rightStyle = {
		width:"50%",
		flexDirection: "column",
		alignItems: "flexStart",
	};

	return (
		<div style={{
			width: "100%", 
			height: "auto",
			backgroundColor :"#414f6b",
			paddingBottom: "5px",
		}}>
			<div className={"containerStyle60percentCenter"}>
				<div style= {navBarStyle}>
					<left style = {leftStyle}>
						<Picture imageName="Logo.png"  
								style = {{
								  width: "30px",
								  paddingTop:"5px",
								}}/>
						<Logo logoType={"bottom"}/>
					</left>

					<right style ={rightStyle}>

						<div className="bottomBarRight">
							<div>COPYRIGHT 2016.</div>
							<div>ALL RIGHTS RESERVED.</div>
						</div>
					</right>
						
				</div>
			</div>
		</div>               
    )
}

