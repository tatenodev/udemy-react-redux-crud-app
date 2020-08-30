import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
    const profiles = [
        {name: "Taro", age: 10},
        {name: "Hanako", age: 5},
        {name: "NoName", age: 3},
    ]
    return(
        <div>
            {
                profiles.map((profile, index) => {
                    return <User name={profile.name} age={profile.age} key={index.toString()}/>
                })
            }
        </div>
    )
}

const User = (props) => {
return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}

User.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired // 値が必須の場合
}

export default App;
