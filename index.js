require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const database = require("./config/database");
const authRouter = require('./routers/authRoute');
const productRouter = require("./routers/productRoute");
const blogRouter = require("./routers/blogRoute");
const categoryRouter = require('./routers/prodcategoryRoute');
const blogcategoryRouter = require ('./routers/blogCatRoute');
const brandRouter = require('./routers/brandRoute');
const couponRouter = require('./routers/couponRoute');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const morgan = require('morgan');

app.use(morgan("dev"));
// connect database
database.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended :false
}));
app.use(cookieParser());

app.use("/api/user", authRouter);
app.use("/api/product", productRouter);
app.use("/api/blog", blogRouter);
app.use("/api/category", categoryRouter);
app.use("/api/blogcategory", blogcategoryRouter);
app.use("/api/brand", brandRouter);
app.use("/api/coupon", couponRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(` app listening on port http://localhost:${port}/`);
});
