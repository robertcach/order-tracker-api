const moongose = require("mongoose");
const Customer = require("./Customer.model");
const Products = require("./Product.model");
const { default: mongoose } = require("mongoose");

const orderSchema = new moongose.Schema(
  {
    total: {
      type: Number,
    },
    status: {
      type: String,
      required: [true, "Status is required"],
    },
    customer: {
      type: moongose.Schema.Types.ObjectId,
      required: true,
    },
    products: [
      {
        type: moongose.Schema.Types.ObjectId,
        required: true,
      },
    ],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        delete ret.__v;
        return ret;
      },
    },
  }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
