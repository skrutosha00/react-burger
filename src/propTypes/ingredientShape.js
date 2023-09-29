import PropTypes from "prop-types";

const ingredientShape = {
  _id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string
};

export default ingredientShape;
