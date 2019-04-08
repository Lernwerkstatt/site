const responseMock = {
  viewName: "",
  data: {},
  render: function render(view, viewData) {
    this.viewName = view;
    this.data = viewData;
  }
};

module.exports = { responseMock };
