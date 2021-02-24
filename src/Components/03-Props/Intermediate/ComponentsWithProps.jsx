'use strict';
import ArrayItem from './ArrayItem'

const ComponentsWithProps = (props) => {

    const values = props.arrayProp.map((item) => <li key={item}>{item}</li>);

    //print an object
    const objectPropsDisplay = [];

    for(let[k,v] of Object.entries(props.objProp)) {
        objectPropsDisplay.push(<li key={k}> value: {v}</li>)
    }

    return (
        <>
            <p>Hi there, the value of string is: {props.stringProp}</p>
            <p>Hi there, the value of function is: {props.func()}</p>
            {
                props.arrayProp.map((item, i) => (
                    <ArrayItem key={i} item={item} />
                ))
            }
            <p>{objectPropsDisplay}</p>
        </>
    )
}

export default ComponentsWithProps;