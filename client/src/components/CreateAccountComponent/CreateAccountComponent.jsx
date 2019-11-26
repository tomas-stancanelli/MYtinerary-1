import React from 'react';

const CreateAccountComponent = () => {
    return (
        <div>
            <h1>Create your account here!</h1>

            <div>
                <label>Username:
                    <input type="text" name="username" id=""/>
                </label>
                <label>Password:
                    <input type="password" name="password" id=""/>
                </label>
                <label>Your Image (URL):
                    <input type="text" name="image" id=""/>
                </label>E-Mail:
                <label>
                    <input type="email" name="email" id=""/>
                </label>
                <label>First Name:
                    <input type="text" name="firstName" id=""/>
                </label>
                <label>Last Name:
                    <input type="text" name="lastName" id=""/>
                </label>
                <label>Country:
                    <select name="country" id="">
                        <option value="argentina">Argentina</option>
                        <option value="uruguay">Uruguay</option>
                        <option value="azerbaijan">Azerbaijan</option>
                        <option value="north_korea">North Korea</option>
                    </select>
                </label>
                
            </div>
            
        </div>
    );
};

export default CreateAccountComponent;