import React, { useEffect, useState } from 'react';
import './TodoStyle.scss';
import axios from 'axios';

const Item = ({ todo }) => {

    return (
        <div>
            <h1>{todo.name}</h1>
        </div>
    )

};

export default Item;