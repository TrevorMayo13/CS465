// .seedgooserc.js
const host = process.env.DB_HOST || "127.0.0.1"

module.exports = {

    modelBaseDirectory: "app_api/models", // model directory name
  
    models: ["*.js", "!db.js"], // model matcher
  
    data: "data", // data directory name
  
    db: `mongodb://${host}:27017/travlr`, // db connection url
  
  };