import React from 'react'

const Title = (props) => {
    return(
        <div>
            <h2 style={props.titleStyle}>{props.hoge}</h2>
        </div>
    );
}

export default Title;