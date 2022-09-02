import React from "react";

const ButtonText = ({name, age, sex}) => {
    return (
        <ul style ={{listStyle: 'none', padding: '0', color: 'blue'}}>
            <li> Имя: {name} </li>
            <li> Возраст: {age} </li>
            <li> Пол: {sex} </li>
        </ul>
    )
}

export default ButtonText