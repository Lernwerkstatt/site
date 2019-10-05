const mongoose = require("mongoose");

mongoose.connect(process.env.DB_HOST, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const blogpostSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true
    },
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    imagelink: {
      type: String,
      required: false
    }
  },
  {
    timestamps: true
  }
);

const Blogposts = mongoose.model("Blogpost", blogpostSchema);

module.exports = Blogposts;
