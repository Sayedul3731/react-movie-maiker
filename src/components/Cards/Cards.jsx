import PropTypes from 'prop-types';
import Card from "../Card/Card";


const Cards = ({actors, handleActors}) => {
    return (
        <div className="w-2/3 grid md:grid-cols-2 gap-3">
           
            {
                actors.map(actor => <Card handleActors={handleActors} key={actor.id} actor={actor}></Card> )
            }
        </div>
    );
};
Cards.propTypes = {
    actors: PropTypes.array,
    handleActors: PropTypes.func
}
export default Cards;