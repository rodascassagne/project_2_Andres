const app = require("./src/app")




app.listen(app.get("port"), () => {
    console.log(`Example app listening on port ${app.get("port")}`)
    console.log("welcome to ", app.get("name"));
})