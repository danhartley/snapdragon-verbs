const release = [new Date().toDateString()];

module.exports = function() {
  return [
    {
      url: "/",
      title: '',
      release
    },
  ];
};