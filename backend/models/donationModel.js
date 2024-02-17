const mongoose = require("mongoose");

const donationSchema = mongoose.Schema(
  {
    supplier_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Supplier",
      required: [true, "Please add a supplier ID"],
    },
    // charity_id: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Charity",
    // },
    itemName: {
      type: String,
      required: [true, "Please add an item name"],
    },
    itemType: {
      type: String,
      required: [true, "Please add an item type(veg/non-veg)"],
    },
    itemQuantity: {
      type: Number,
      required: [true, "Please add an item quantity"],
    },
    date: {
      type: Date,
      required: [true, "Please add a donation date"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Donation", donationSchema);
