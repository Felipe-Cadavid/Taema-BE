const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    // userId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'User',
    //   required: true,
    //   default: null,
    // },
    orderDate: {
      type: Date,
      required: true,
    },
    orderStatus: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
    orderItems: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        cardMessage: {
          type: String,
        }
      },
    ],
    shippingAddress: {
      type: String,
      required: true,
    },
    shippingCity: {
      type: String,
      required: true,
    },
    clientPhone: {
      type: Number,
      required: true,
    },
    clientEmail: {
      type: String,
      required: true,
    },
    clientName: {
      type: String,
      required: true,
    },
    shippingTime: {
      type: String,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    orderNumber: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const orderModel = mongoose.model("Order", orderSchema);

module.exports = orderModel;
