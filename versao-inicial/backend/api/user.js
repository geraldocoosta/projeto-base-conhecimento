module.exports = app => {
  const save = (_, res) => {
    res.send("user save");
  };

  return { save };
};
