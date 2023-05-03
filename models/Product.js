import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const ProductSchema = new mongoose.Schema({
  title: {

    type: String,
    required: [true, 'Please provide the name of this product.'],
    maxlength: [60, 'Title cannot be more than 60 characters'],
  },

  desc: {

    type: String,
    required: [true, "Please provide a description of this product"],
    maxlength: [200, "Description cannot be more than 200 characters"],
  },

  img: {
    required: [true, 'Please provide an image for this product.'],
    type: String,
  },

  prices: {
    type: [Number],
    required: [true, 'Please provide prices for this product.']
  },

  extraOptions: {
    type: [{
      text: { type: String, required: true },
      price: { type: Number, required: true }
    }]
  },
},
  { timestamps: true }
)

export default mongoose.models.Product || mongoose.model('Product', ProductSchema)
