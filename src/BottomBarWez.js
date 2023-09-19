
import Picture from './Picture';
import './index.css';
import Logo from './Logo';

export default function BottomBarWez(){



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
			backgroundColor :"white",
            fontSize: "12px",
		}}>
			<div className={"containerStyle60percentCenter"}>
				<div style= {navBarStyle}>
			
							<div>(Wez)</div>
							<div> implemented by React.js</div>
						
				</div>
			</div>
		</div>               
    )
}

