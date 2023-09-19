



export default function SectionTitle({T1Name,T2Name, T3Text}){


const containerStyle ={
    paddingTop : "15px",
};
const titleStyle = {
    display: "flex",
};
    return (
        <div style = {containerStyle}>
            <div style = {titleStyle}>    
                <div className="sectionTitleT1style">{T1Name}</div>
            
                <div style={{
                        display: "block",
                        paddingTop: "35px"}}>
    
                    <div className="sectionTitleT2style">{T2Name}</div>
                    <div className="sectionTitleDot">
                    
                    </div>

                </div>
            </div>    
            <div className="sectionTitleT3style">{T3Text}</div>
        </div>    
    )
}