const httpMessage = (res, statusCode = 404, message = "There was an error") => {
  res.status(statusCode).json({
    message,
  });
};

export default httpMessage;
