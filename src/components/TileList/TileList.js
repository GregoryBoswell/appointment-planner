import Tile from "./Tile";

function TileList(props) {
    function getDescription(object) {
        let {name, ...rest} = object;
        return rest;
    };

    return (
        <div id="tilelist">
            {
                props.array.map((object) => (
                    <Tile name={object.name} description={getDescription(object)}/>
                ))
            }
        </div>
    );
};

export default TileList;