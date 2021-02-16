import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        image: { type: String, requires: true },
        brand: { type: String, requires: true },
        category: { type: String, requires: true },
        description: { type: String, requires: true },
        price: { type: Number, required: true },
        countInStock: { type: Number, required: true },
        rating: { type: Number, required: true },
        numReviews: { type: Number, required: true },

    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model('Product', productSchema)

export default Product;
