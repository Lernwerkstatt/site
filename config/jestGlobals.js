const dotenv = require("dotenv");

dotenv.config();

global.responseMock = {
  viewName: "",
  data: {},
  render: function render(view, viewData) {
    this.viewName = view;
    this.data = viewData;
  }
};
