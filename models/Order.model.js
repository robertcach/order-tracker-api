const mongoose = require("mongoose");
const Customer = require("./Customer.model");
const Product = require("./Product.model");

const orderSchema = new mongoose.Schema(
  {
    total: {
      type: Number,
    },
    status: {
      type: String,
      required: [true, "Status is required"],
    },
    customerID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Customer.modelName,
      required: true,
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Product.modelName,
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

orderSchema.virtual("customerData", {
  ref: "Customer",
  localField: "customerID",
  foreignField: "_id",
  justOne: false,
});

orderSchema.virtual("productsData", {
  ref: "Product",
  localField: "products",
  foreignField: "_id",
  justOne: false,
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
