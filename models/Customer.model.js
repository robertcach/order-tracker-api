const mongoose = require("mongoose");

const EMAIL_PATTERN =
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Title is required"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [EMAIL_PATTERN, "Please provide a valid email"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
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

customerSchema.virtual("orders", {
  ref: "Order",
  localField: "_id",
  foreignField: "customerID",
  justOne: false,
});

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
