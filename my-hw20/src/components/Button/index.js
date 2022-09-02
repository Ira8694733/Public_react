import React from "react";
import ButtonText from "./ButtonText";
import ButtonItem from "./ButtonItem";

const Button = () => {

    const showUserInfo = () => {
        const UserInfo = document.querySelector('.UserInfo')

        if(UserInfo.style.display === 'none') {
            UserInfo.style.display = 'block'
        }

    }
    return (
        <div style={{fontSize: '24px', textAlign: 'center'}}>
        <ButtonItem clickOnButton={showUserInfo}/>
            <div className = "UserInfo" style={{display: 'none'}}>
              <ButtonText name={'Иван Иванов'} age={'25'} sex={'мужской'}/>
            </div>
    </div>
    )
}

export default Button

