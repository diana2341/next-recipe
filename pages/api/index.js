const express = require("express");
const mongoose = require("mongoose");
const recipesRoutes = require("./routes/recipes");


const app = express();

mongoose
  .connect(
    `mongodb+srv://${encodeURIComponent('dianaponce')}:${encodeURIComponent('5Xx8PDdyANTksM2i')}@cluster0.lcuhssj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    {
       
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

//   define api routes
app.use("/api/recipes", recipesRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
