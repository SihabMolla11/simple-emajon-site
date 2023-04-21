import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';

const Inventory = () => {

    const {user} = useContext(AuthContext)

    return (
        <div>
            This is Inventory page {user.name}
        </div>
    );
};

export default Inventory;