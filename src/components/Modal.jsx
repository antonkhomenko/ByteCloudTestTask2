import React, {useEffect} from 'react';
import styled from "styled-components";
import {css} from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Content = styled.div`
  width: 80%;
  height: 100%;
  //background-color: #fff;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5%;
`;

const Item = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 2px solid black;
  background-color: #9ac49a;
`;

const Block = styled.div`
  border-top: 2px solid black;
  ${props => props.br && css`
    border-right: 2px solid black;
  `}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 5px;

`

const Modal = ({data}) => {

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, []);

    console.log(data);


    return (
        <Wrapper>
            <Content>
                <div style={{display: 'flex', flexDirection: 'column', gap: '3%'}}>
                    <h1 style={{marginTop: '5%', textAlign: 'center'}}>ByteCloud</h1>
                    {
                        data.byteCloud.map(item => {
                            return (
                                <Item>
                                    <strong style={{gridColumn: '1/3', padding: '5px', textAlign: 'center'}}>
                                        {item.name}
                                    </strong>
                                    <div>
                                        starts
                                    </div>
                                    <Block br>
                                        <p>Latency</p>
                                        {item.latency}
                                    </Block>
                                    <Block br>
                                        <p>Download time</p>
                                        {Math.floor(item.latency * 3 - 5)}
                                    </Block>
                                    <Block>
                                        <p>Video Streaming</p>
                                        <p>4K/2160p UltraHD</p>
                                    </Block>
                                </Item>
                            )
                        })
                    }
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '3%'}}>
                    <h1 style={{marginTop: '5%', textAlign: 'center'}}>Object Storage</h1>
                    {
                        data.objectStorage.map(item => {
                            return (
                                <Item>
                                    <strong style={{gridColumn: '1/3', padding: '5px', textAlign: 'center'}}>
                                        {item.name}
                                    </strong>
                                    <div>
                                        starts
                                    </div>
                                    <Block br>
                                        <p>Latency</p>
                                        {item.latency}
                                    </Block>
                                    <Block br>
                                        <p>Download time</p>
                                        {Math.floor(item.latency * 3 - 5)}
                                    </Block>
                                    <Block>
                                        <p>Video Streaming</p>
                                        <p>4K/2160p UltraHD</p>
                                    </Block>
                                </Item>
                            )
                        })
                    }
                </div>

            </Content>
        </Wrapper>
    );
};

export default Modal;