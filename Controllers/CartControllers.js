const { cart } = require("../Database/CartSchema");

async function GetCartData() {
  let data = cart.find();
  return await data;
}

async function GetCartDataById(id) {
  let data = cart.findById(id);
  return await data;
}

//===================================******* Post Data *********=================================

async function CreateData(data) {
  return await cart.create({
    ...data,
  });
}

//===================================******* Patch Data *********=======================================================

async function UpdateData(id, data) {
  await cart.findByIdAndUpdate(id, {
    $set: {
      ...data,
    },
  });

  const UpadatedData = await cart.findById(id);
  return UpadatedData;
}

async function DeleteData(id) {
  const DeletedData = await cart.findById(id);
  await cart.findByIdAndDelete(id);
  return DeletedData;
}

module.exports = { GetCartData,GetCartDataById, CreateData, UpdateData, DeleteData };
