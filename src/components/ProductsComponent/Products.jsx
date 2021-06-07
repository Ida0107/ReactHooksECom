import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../redux/products/products.actions';

const Products = ({products, getAllProducts}) => {

    useEffect(() => {
        getAllProducts();
    },[])

    return (
        <div>Producs</div>
    )
}

const mapStateToProps = (state) => ({
    products: state.products.allProducts
})

const mapDispatchToProps = (dispatch) => ({
    getAllProducts: () => dispatch(getProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);