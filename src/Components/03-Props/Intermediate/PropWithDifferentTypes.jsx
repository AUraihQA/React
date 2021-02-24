'use strict';
import ComponentsWithProps from './ComponentsWithProps';

const PropWithDifferentTypes = () => {

    //number
    const myVal = 10;

    //boolean
    const bool = true;

    // String
    const str = "Hi";

    //Object
    const someObj = {
        name: "Mercury",
        brand: "Mercedes",
        year: 2018,
        interior: ["sunroof", 2, "heated seats", "DRL"]
    };

    const fruites = ["pineapples", "apples", "strawberries", "kiwi"];

    const someFunction = () => (`A string from a function`);

    return(
        <ComponentsWithProps 
            numberProp={myVal}
            booleanProp={bool}
            stringProp={str}
            objProp={someObj}
            arrayProp={fruites}
            func={someFunction}
        />
    )
}

export default PropWithDifferentTypes;

