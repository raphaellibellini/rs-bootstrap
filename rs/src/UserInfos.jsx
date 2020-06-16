import React, { Component } from 'react';
import './App.css';
import './index.css';

const UserInfos = (props) => {
        const { nome, sobrenome } = props.location.state;
        
        return (
            <div>
                <p className='welcome'>Bem vindo</p>
                <br/>
                <p className='name'>{`${nome} ${sobrenome}`}</p>  
            </div>
        );
    
}

export default UserInfos;