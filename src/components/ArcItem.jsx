import styled from "styled-components";

const ArcImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
`

const ArcItem = ({src}) => {
    return (
       <ArcImg src={src} alt='arc-img'/>
    );
};

export default ArcItem;