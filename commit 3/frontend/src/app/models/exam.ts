const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: [true, 'Question text is required']
  },
  options: [{
    text: {
      type: String,
      required: [true, 'Option text is required']
    },
    isCorrect: {
      type: Boolean,
      default: false
    }
  }],
  marks: {
    type: Number,
    required: [true, 'Question marks are required'],
    default: 1
  }
});

const examSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Exam title is required']
  },
  description: {
    type: String
  },
  duration: {
    type: Number,
    required: [true, 'Exam duration is required']
  },
  questions: [questionSchema],
  totalMarks: {
    type: Number,
    required: [true, 'Total marks are required']
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Exam creator is required']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Exam', examSchema);
