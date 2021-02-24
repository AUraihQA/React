const Individual = require('./Individual');
const Humans = require('./People.json');

const People = () => {

    return (
        <>
            {Humans.map((person) => (
                <Individual
                    key={person.id}
                    name={person.name}
                    city={person.address.city}
                    info={person}
                    website={person.website}
                />
            ))}
        </>
    );

}

export default People; 