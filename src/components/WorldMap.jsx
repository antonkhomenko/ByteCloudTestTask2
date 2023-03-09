import styled from "styled-components";
import UserList from "./UserList.jsx";

const MapWrapper = styled.div`
  min-width: 350px;
  max-width: 1200px;
  //width: min-content;
  margin: 0 auto;
  position: relative;
  border: 5px solid green;
`;

const MapImg = styled.img`
  display: block;
  width: 100%;
`;

const LocationBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13%;
  height: 15%;
  //border: 3px solid blue;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
`;


const WorldMap = () => {
    return (
        <MapWrapper>
            <MapImg src={'/src/assets/map.png'} alt={'map-img'}/>
            {coordinate.map(item => {
                return (
                    <LocationBlock key={item.name} top={item.top} left={item.left}>
                        <UserList/>
                    </LocationBlock>
                )
            })}
        </MapWrapper>
    );
};

const coordinate = [
    {top: '35%', left: '15%', name: "NorthAmerica"},
    {top: '64%', left: '26%', name: 'SouthAmerica'},
    {top: '30%', left: '47%', name: 'Europe'},
    {top: '42%', left: '68%', name: 'Asia'},
    {top: '70%', left: '76%', name: 'Australia'},
];

export default WorldMap;