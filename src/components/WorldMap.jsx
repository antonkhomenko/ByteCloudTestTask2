import styled from "styled-components";
import UserList from "./UserList.jsx";

const MapWrapper = styled.div`
  min-width: 375px;
  width: min-content;
  //border: 5px solid red;
  margin: 5% auto;
  position: relative;
`;

const MapImg = styled.img`
  display: block;
  max-width: 1200px;
`;

const LocationBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 120px;
  border: 3px solid blue;
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
    {top: '31%', left: '47%', name: 'Europe'},
    {top: '44%', left: '68%', name: 'Asia'},
    {top: '71%', left: '77%', name: 'Australia'},
];

export default WorldMap;