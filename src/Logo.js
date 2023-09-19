import './index.css';



export default function Logo({logoType}){
   
// logoType = bottom P1, P2


// default
var containerStyle = {};
var lStyle = {color: "#4d4d4d"};
var aStyle = {color: "#414f6b"}; 

// 

    if (logoType === "P1"){
        containerStyle = {
        opacity: "0",
        zIndex: "-1",
        };   
    }
    else if (logoType === "P2"){
        containerStyle = {
            fontSize: "13px",
            fontWeight: "700",
        };
    }
    else if (logoType === "logoP1Large"){
        containerStyle = {
            //define by RWD CSS 
            top:"15%",
            left: "18%",
        }; 
    }
    else if ( logoType === "bottom") {
        containerStyle = {
            fontSize: "13px",
            fontWeight: "700",
            color : "#63769d",            
        };
        lStyle = {};
        aStyle = {};

    }

    return (
            <div id={logoType+"id"}     
                 className={logoType} 
                 style={containerStyle}>
		            <div style={lStyle}>LOSANGELES</div>
		    	    <div style={aStyle}>MOUNTAINS</div>
            </div>

    )
}