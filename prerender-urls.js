const release = [new Date().toLocaleTimeString()];

module.exports = function() {
  return [
    {
      url: "./",
      title: '',
      release
    },
  ];
};