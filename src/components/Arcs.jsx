import styled from "styled-components";
import ArcItem from "./ArcItem.jsx";
import arc1 from '/src/assets/arcs/arc_east-usa_asia_large.png';




const Arcs = ({data}) => {

    console.log(data);

    return (
        <ArcItem src={arc1}/>
    );
};

export default Arcs;