const { getVisitorDateInfo } = require("./utils");
const visitorService = require("./visitorService");

const getVisitor = async (req, res, next) => {
  try {
    const dateInfo = getVisitorDateInfo();
    const totalVisitor = await visitorService.getTotalVisitor();
    const todayVisitor = await visitorService.getTodayVisitor({ dateInfo });
    return res.status(201).json({ totalVisitor, todayVisitor });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const addVisitor = async (req, res, next) => {
  try {
    const dateInfo = getVisitorDateInfo();
    await visitorService.addVisitor({ dateInfo });
    await getVisitor();
  } catch (err) {
    console.error(err);
    next(err);
  }
};

module.exports = {
  getVisitor,
  addVisitor,
};
