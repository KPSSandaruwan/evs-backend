const mongoose = require('mongoose');


const schema = mongoose.Schema;

const VoterSchema = new schema({
    fullName: {
        type: String,
        required: [true, "Name field is required!"]
    },
    nicNO: {
        type: String,
        required: [true, "NIC is required!"]
    }
});


const Voter = mongoose.model('Voter', VoterSchema);
module.exports = { Voter }