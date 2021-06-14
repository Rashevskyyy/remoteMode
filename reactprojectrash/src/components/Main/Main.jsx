import React from 'react';
import  Card  from '../Card';
import './Main.css';

function Main(props) {
    const createCards = () => {
        return props.data.map(el => <Card src={el.img} title={el.description} id={el.id} key={el.id} />);
    };
    return (
        <div className="fon">
            <div className="card-block">
                {createCards(props.data)}
            </div>
        </div>
    );
}

export default Main;