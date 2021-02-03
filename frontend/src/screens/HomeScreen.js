import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Product from "../components/Product";
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

export default function HomeScreen() {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList;
    useEffect(() => {
        dispatch(listProducts())
    }, [])
    return (
        <div>
            {loading ? <LoadingBox /> : error ? <MessageBox className="alert-danger">{error}</MessageBox> :
                <div className="row center">
                    {
                        products.map(product => (
                            <Product key={product._id} product={product} />
                        ))
                    }
                </div>
            }

        </div >
    )
}
