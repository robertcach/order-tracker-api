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
    customerID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
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

orderSchema.virtual("customerData", {
  ref: "Customer",
  localField: "customerID",
  foreignField: "_id",
  justOne: false,
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
