import React from 'react';

import UserItem from '../UserItem/UserItem';

const ListUser = (props) => {
    return <div>
        { props.users.map( (user) => (
            <UserItem user={user} key={Math.random()} />
        )  ) }
    </div>
}

export default ListUser;