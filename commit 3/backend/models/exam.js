const mongoose = require("mongoose");

const examSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Exam title is required"],
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  duration: {
    type: Number,
    required: [true, "Exam duration is required"],
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  questions: [
    {
      questionText: {
        type: String,
        required: [true, "Question text is required"],
      },
      options: [
        {
          type: String,
          required: [true, "Option is required"],
        },
      ],
      correctAnswer: {
        type: String,
        required: [true, "Correct answer is required"],
      },
    },
  ],
});

const examModel = mongoose.model("Exam", examSchema);

module.exports = examModel;







// const mongoose = require("mongoose");

// const examSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: [true, "Exam name is required"],
//     },
//     description: {
//       type: String,
//       required: [true, "Exam description is required"],
//     },
//     questions: [
//       {
//         questionText: {
//           type: String,
//           required: [true, "Question text is required"],
//         },
//         choices: {
//           type: [
//             {
//               text: {
//                 type: String,
//                 required: function () {
//                   return this.choices.indexOf(this) < 2; // First 2 choices are required
//                 },
//               },
//               isCorrect: {
//                 type: Boolean,
//                 default: false,
//               },
//             },
//           ],
//           validate: [
//             {
//               validator: function (choices) {
//                 return choices.length <= 4; // Maximum 4 choices allowed
//               },
//               message: "Maximum 4 choices allowed per question",
//             },
//             {
//               validator: function (choices) {
//                 return (
//                   choices.filter((choice) => choice.isCorrect).length === 1
//                 );
//               },
//               message: "Question must have exactly one correct answer",
//             },
//           ],
//           required: [true, "Question choices are required"],
//         },
//         marks: {
//           type: Number,
//           required: [true, "Question marks are required"],
//         },
//       },
//     ],
//     totalMarks: {
//       type: Number,
//       required: [true, "Exam total marks are required"],
//     },
//   },
//   { timestamps: true }
// );

// examSchema.pre("save", function (next) {
//   this.totalMarks = this.questions.reduce(
//     (total, question) => total + question.marks,
//     0
//   );
//   next();
// });

// const Exam = mongoose.model("Exam", examSchema);

// module.exports = Exam;
