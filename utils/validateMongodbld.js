const mongoose  = require('mongoose');
const validateMongoDbId = (id) => {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if(!isValid) throw new Error("This id id not valid or not Found");
}

module.exports = validateMongoDbId;