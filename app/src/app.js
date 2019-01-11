const promBundle = require("express-prom-bundle");
const app = require("express")();
const metricsMiddleware = promBundle({ includeMethod: true });
const morgan = require('morgan')

app.use(metricsMiddleware);

app.use(
  morgan(
    ':method :url :status - :response-time ms'
  )
);

let count = 0

app.get("/resource", (req, res) => {
  count++

  const event = Math.sin(count)

  console.log(event)
  setTimeout(() => {

    if (event < 0.6) {
      res.status(200).json({
        anything: ++count,
        square: count*count
      })
    } else if (event <  0.8) {
      res.status(404).json({
        message: "resource not found"
      })
    } else {
      res.status(500).json({
        message: "unknow error"
      })
    }


  },  event * 1000)

})

app.listen(3000, () => {
  console.log("é tetra! acabou!")
})