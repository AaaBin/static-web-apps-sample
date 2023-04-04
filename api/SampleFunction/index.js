module.exports = function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  const name = req.body.name;
  const password = req.body.password;

  // get the correct password from the environment variable
  const correctPassword = process.env["CORRECT_PASSWORD"];

  if (name && name === "Abin" && password && password === correctPassword) {
    context.res.json({
      response: "Welcome Abin!",
    });
  }
  else {
    context.res.status(400).json({
      response: "Incorrect user name or password",
    });
  }
};
