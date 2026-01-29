const db = require("./database");

db.connect();
db.querry("SELECT * FROM users");
db.disconnect();