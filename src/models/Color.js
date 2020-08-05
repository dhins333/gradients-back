const mongoose = require('mongoose');

const Color = mongoose.model('pair',{
    color1:{
        type:Array
    },
    color2:{
        type:Array
    },
    percent1:{
        type:Number
    },
    percent2:{
        type:Number
    },
    type:{
        type:String
    },
    deg:{
        type:Number
    }
});

module.exports = Color;