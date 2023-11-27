const userCart = {
  phone: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
    min: 10,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },

  products: {
    type: Array,
  },

  count: {
    type: Number,
    default: 0,
  },
  totalPrice: {
    type: Number,
    default: 0,
  },
};



module.exports=userCart