var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var GenreSchema = new Schema({
    name: { type: String, required: true, min: 3, max: 100 },
});

GenreSchema
.virtual('url')
.get(() => {
    return '/catalog/genre/' + this._id;
});

var Genre = mongoose.model('Genre', GenreSchema);

module.exports = Genre;