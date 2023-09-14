import PropTypes from 'prop-types';

const Card = ({actor, handleActors}) => {
    
const {name, image, role, salary} = actor;
    return (
        <div className="bg-gray-300 rounded-xl p-3 justify-center">
            <img className="rounded-full" src={image} alt="" />
            <h3>{name}</h3>
             <h2>Role: {role} </h2>
             <h2>Salary: {salary}$</h2>
             <button onClick={() => handleActors(actor)} className="bg-gray-100 px-3 py-1 font-semibold rounded-sm ml-16 mt-4">Select</button>
        </div>
    );
};
Card.propTypes = {
    actor: PropTypes.object,
    handleActors: PropTypes.func
}
export default Card;