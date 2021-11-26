const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate'); // Trazando ou importando o Pacote como dependencia do meu projeto para pode utiliza. 

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    url: {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    }

});

ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema);   
