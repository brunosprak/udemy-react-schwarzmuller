import React from 'react';

import UserItem from '../UserItem/UserItem';

const ListUser = (props) => {
    return <>
        { props.users.map( (user) => (
            <UserItem user={user} key={Math.random()} />
        )  ) }
    </>
}

export default ListUser;