const on = jest.fn(() => ({ on }));
const watch = jest.fn(() => ({
  on,
}));
const chokidarMocks = jest.fn(() => ({
  watch,
}));

module.exports = chokidarMocks;
module.exports.watch = watch;
module.exports.on = on;
