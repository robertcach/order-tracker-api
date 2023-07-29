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
    productsID: [
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

orderSchema.virtual("customer", {
  ref: "Customer",
  localField: "customerID",
  foreignField: "_id",
  justOne: false,
});

orderSchema.virtual("products", {
  ref: "Product",
  localField: "productsID",
  foreignField: "_id",
  justOne: false,
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
