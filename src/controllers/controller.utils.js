module.exports = {
  abstractActionResult(payload, error) {
    if (error) {
      return {
        error: { errorType: error.name, errorMessage: error.message },
        success: false
      };
    }
    return {
      success: true,
      data: payload
    };
  }
};
