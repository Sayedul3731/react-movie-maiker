import PropTypes from 'prop-types';

const Carts = ({selectedActors, totalCost, totalRemaining}) => {
    return (
        <div className="w-1/3 ml-10">
            <h2>Selected Actors: {selectedActors.length}</h2>
            <h4>Total Cost: {totalCost}$</h4>
            <h4>Total Remaining: {totalRemaining}$</h4>
            {
                selectedActors.map( actor => <li key={actor.id}>{actor.name}</li> )
            }
        </div>
    );
};
Carts.propTypes = {
    selectedActors: PropTypes.array,
    totalCost: PropTypes.number,
    totalRemaining: PropTypes.number
}
export default Carts;