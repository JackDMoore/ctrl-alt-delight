import React from 'react';

const SingleUser = ({ user }) => {

    return <div className='singleuser'>
        <h3>{user}</h3>
        <p><span className="rating">{user.rating}</span></p>
        <br></br>
    </div>
};

export default SingleUser;
