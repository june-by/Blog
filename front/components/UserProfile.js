import React, { useCallback } from 'react';
import { Avatar ,Button, Card} from 'antd';
import { useDispatch } from 'react-redux';
import {logoutAction} from '../reducers/user'
// eslint-disable-next-line react/prop-types
const UserProfile = () => {

    const dispatch = useDispatch();
    const onLogOut = useCallback(()=>{
        dispatch(logoutAction());
    },[]);

    return(
        <Card>
            <Card.Meta 
                avatar = {<Avatar>BJ</Avatar>}
                title = "By-juun"
            />
            <Button onClick = {onLogOut}>로그아웃</Button>
        </Card>
    );
};

export default UserProfile;