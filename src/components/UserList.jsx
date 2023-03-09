import React, {useId, useRef, useState} from 'react';
import User from "./User.jsx";
import styled from "styled-components";
import man_empty from '/src/assets/man_empty.png';
import man_filled from '/src/assets/man_filled.png';

const UserListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
`;



let userId = 0;

const usersInitValue = [
    {src: man_empty, width: '1rem', id: userId++},
    {src: man_empty, width: '1.2rem', id: userId++},
    {src: man_empty, width: '1.4rem', id: userId++},
];


const UserList = () => {

    const [users, setUsers] = useState(usersInitValue);

    const handleMouseEnter = (targetIndex) => {
        const hoverUsers = users.map((item, index) => {
            if(index <= targetIndex) {
                return {...item, src: man_filled};
            }
            return item;
        });
        setUsers(hoverUsers);
    }

    const handleMouseLeave = () => {
        setUsers(usersInitValue);
    }


    return (
        <UserListWrapper>
            {
                users.map((item, index) => {
                    const {width, src, id} = item;
                    return (
                        <User
                            width={width} src={src} key={id}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave()}
                        />
                    )
                })
            }
        </UserListWrapper>
    );
};

export default UserList;