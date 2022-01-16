import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Products = props => {
    return (
        <div>
            
        </div>
    )
}

Products.propTypes = {

}

const mapStateToProps = ({productsState: {name}}) => {
    return {name: name}
}

const mapDispatchToProps = (dispatch) => {
    // findAll: async () => 
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
