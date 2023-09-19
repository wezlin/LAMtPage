export default function Picture({ imageName, style }) {
    const imagePath = '/images/' + imageName;

    return (
        <div>
            <img src={process.env.PUBLIC_URL + imagePath} 
                 alt={imageName} 
                 style={style} />   
        </div>
    );
}