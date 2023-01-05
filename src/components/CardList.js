import Card from './Card';
const CardList = ({robots}) => {
    return (
        <div>
            {getCards(robots)}
        </div>
    );
}

function getCards(robots) {
    return robots.map((robot, i) => {
        return (
            <Card
                key={i}
                id={robot.id}
                name={robot.name}
                email={robot.email} />
        );
    });
}

export default CardList;


