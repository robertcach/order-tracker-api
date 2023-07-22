const mongoose = require("mongoose");
const Customer = require("./Customer.model");

const orderSchema = new mongoose.Schema(
  {
    total: {
      type: Number,
    },
    status: {
      type: String,
      required: [true, "Status is required"],
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Customer.modelName,
      required: true,
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
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
