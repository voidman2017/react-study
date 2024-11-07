import PropTypes from 'prop-types';

const PropTypesComponent = ({ text }) => {
  return <div>{text}</div>;
};

PropTypesComponent.defaultProps = {
  text: '默认文本'
};

PropTypesComponent.propTypes = {
  text: PropTypes.string
};

export default PropTypesComponent;
