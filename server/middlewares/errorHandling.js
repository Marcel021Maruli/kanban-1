function showError(err, req, res, next) {
  const errArr = []
  if (err.name === "SequelizeValidationError") {
    err.errors.forEach(el => {
      errArr.push(el.message)
    })
    res.status(400).json(errArr)
  } else if (err.name === "SequelizeUniqueConstraintError") {
    err.errors.forEach(el => {
      errArr.push(el.message)
    })
    res.status(400).json(errArr)
  } else if (err.error === 400) {
    res
      .status(400).json(err)
  } else if (err === null) {
    res.status(404).json({ msg: 'Data not Found!' })
  }
  else {
    res.status(500).json(err)
  }

}

module.exports = showError