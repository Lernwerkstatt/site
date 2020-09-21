const mongoose = require("mongoose");

mongoose.connect(process.env.DB_HOST, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const videopostSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    video_id: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Videoposts = mongoose.model("Videopost", videopostSchema);

module.exports = Videoposts;
