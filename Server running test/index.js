import express from "express";

const app = express();

app.get("/sum", (req, res) => {
  res.json({
    message: "Fully success message",
    type: "success",
  });
});

app.listen(3000,()=>{
  console.log("Server running at http://localhost:3000");
  
})

export default app;
