const Order = require("./order.model");

async function getOrders(req, res) {
  // READ
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function createOrder(req, res) {
  // CREATE
  try {
    const { ...orderInfo } = req.body;
    console.log(orderInfo);
    const order = new Order(orderInfo);
    await order.save();
    res.json({ message: `Order created, id: ${order._id}` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
}
module.exports = { getOrders, createOrder };