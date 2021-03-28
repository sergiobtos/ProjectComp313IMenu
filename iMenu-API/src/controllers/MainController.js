//Display basic info.
exports.basicInfo = (req, res) => {
  res.json({
    Name: "Demario Douce",
    Copyright: "All rights reserved.",
    //Link for all the features available.
    Features: {
      url: "/features",
    },
  });
};
