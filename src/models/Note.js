const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NOTE_TYPES = ['TWITTER', 'ARTICLE', 'SIMPLE'];

const NoteSchema = new Schema({
  type: {
    type: String,
    enum: NOTE_TYPES,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    defualt: null,
  },
  thumbnail: {
    type: String,
    default: null,
  },
  userID: {
    type: String,
    required: true,
  }
});

mongoose.model('notes', NoteSchema);