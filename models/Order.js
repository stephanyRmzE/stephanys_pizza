import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const OrderSchema = new mongoose.Schema({

  customer: {
    type: String,
    required: [true, 'Please provide customer name.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },

  address: {
    type: String,
    required: [true, "Please provide an address"],
    maxlength: [200, "Description cannot be more than 200 characters"],
  },

  total: {
    type: Number,
    required: true,
  },

  status: {
    type: Number,
    default: 0,
  },

  method: {
    type: Number,
    default: 0,
  },
},
  { timestamps: true }
)

export default mongoose.models.Order || mongoose.model('Order', OrderSchema)
