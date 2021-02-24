'use strict';

const Second = () => {

    const name =  `Adi Uraih`;
    const date = new Date();
    const firstName = `Adi`;
    const lastName = `Uraih`;

    return(
       <>
            <h1>Hello friends!</h1>
            <p>{name}</p>
            <p>This component was created on: {date.toLocaleDateString()}</p>
            <p>This current time: {date.toLocaleTimeString()}</p>
            <p>{firstName} {lastName}</p>
       </>
    )

}

export default Second;