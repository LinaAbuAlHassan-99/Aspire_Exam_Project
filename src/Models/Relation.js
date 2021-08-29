// const User = require("./User");
// const Exam = require("./Exam");
// const Question = require("./Question");
// const UserExam = require("./UserExam");
// const UserExamSession = require("./UserExamSession");
// const UserToken = require("./UserToken");
// const ExamQuestion = require("./ExamQuestion");
//const UserExamAnswer = require("./src/Models/UserExamAnswer");

// //1:M
// User.hasMany(UserToken, { foreignKey: "user_id", targetKey: "id" });
// UserToken.belongsTo(User, { foreignKey: "user_id", targetKey: "id" });

// UserExam.hasMany(UserExamSession, {
//   foreignKey: "user_exam_id",
//   targetKey: "id",
// });
// UserExamSession.belongsTo(UserExam, {
//   foreignKey: "user_exam_id",
//   targetKey: "id",
// });

// //M:M
// User.belongsToMany(Exam, { through: "user_exam" });
// Exam.belongsToMany(User, { through: "user_exam" });

// Question.belongsToMany(Exam, { through: "exam-question" });
// Exam.belongsToMany(Question, { through: "exam-question" });

// Question.belongsToMany(UserExam, { through: "user-exam-answer" });
// UserExam.belongsToMany(Question, { through: "user-exam-answer" });
