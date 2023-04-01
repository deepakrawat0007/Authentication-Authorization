const mongoose = require('mongoose');
const app = require("./app");
const port = 5000

async function main(){
 await mongoose.connect("mongodb+srv://root:root123@cluster0.hzhvoqr.mongodb.net/test?retryWrites=true&w=majority")
 console.log("Connected to database => test")
 app.listen(port, () => console.log(`Server is live at PORT => ${port}`));
}

main()