const DashboardModel = require("../Models/DashboardModel");

exports.getDashboard = async (req, res) => {
  DashboardModel.find(
    { userPhoneNumber: req.userPhoneNumber, _id: req.id },
    (err, data) => {
      if (err) {
        res.status(400).json({
          error: true,
          message: err,
        });
      } else {
        res.status(200).json({
          error: false,
          data: data,
          message: "data fetch successfully",
        });
      }
    }
  );
};
