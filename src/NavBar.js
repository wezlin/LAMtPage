import Picture from './Picture';
import Logo from './Logo';
export default function NavBar({navBarType}){

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
		height:"50px",
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
			<div style= {navBarStyle}>
                <left style = {leftStyle}>
				    <Picture imageName="Logo.png" 
							  style = {{
								width: "30px",
								paddingTop:"5px",
							  }}/>
					<Logo logoType={navBarType}/>
				</left>

                <right style ={rightStyle}>
	                <div style= {{
					display: "flex",
					float:"right",
    				textDecoration: "none",
					fontSize: "18px",
					justifyContent: "flex-end",
    				letterSpacing: "1px",
    				lineHeight: "20px",    	
					color: "#fefeff",
    				fontFamily: "Lato",
    				fontWeight: "900",
    				fontStyle: "italic",
					width: "70%",
					gap: "20px",	
					whiteSpace: "nowrap",
					}}
					id= "navBarid">

						<a href="#section2"
							style={{
							color: navBarType === "P2" ?"#414f6b" :"#fefeff",
							textDecoration: "white", 
						  }}>01. HISTORY
						</a>
						<a href="#section3"
							style={{
							color: navBarType === "P2" ?"#414f6b" :"#fefeff",
							textDecoration: "white", 
						  }}>02. TEAM
						</a>
					</div>
                </right>
            </div>
	)
}
