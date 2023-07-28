function Tile(props) {
    return (
        <div>
            <p className="tile-title">{props.name}</p>
            {
                Object.values(props.description).map((item) => (
                    <p className="tile">{item}</p>
                ))
            }
        </div>
    );
};

export default Tile;