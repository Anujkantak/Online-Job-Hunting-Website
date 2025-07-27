export const catchAsyncErrors = (cb) => {
  return (req, res, next) => {
    Promise.resolve(cb(req, res, next)).catch(next);

    // It calls your async function (cb) with the current request.

    // If the function returns a promise (which async functions always do), Promise.resolve(...) wraps it.

    // If the promise rejects, .catch(next) will catch the error and pass it to next().

    // This activates Express’s error-handling middleware.
  };
};


// Wraps your async route/controller functions
//  Automatically catches any errors that happen inside them
//  Forwards those errors to Express's error-handling middleware


// generally when catchAsyncErrors is used to avoid try-catch blocks in every async function
//  It simplifies error handling in your application
//  It allows you to write cleaner and more maintainable code
//  It ensures that any errors thrown in your async functions are properly caught and passed to the
//  error-handling middleware, which can then handle them uniformly

//but still we are using try-catch blocks in the controller functions
//  to handle specific errors that may occur during the execution of the function, such as validation
//  errors or database errors. This allows us to provide more specific error messages and handle
//  different types of errors in different ways, while still using catchAsyncErrors to handle any
//  unhandled errors that may occur in the function.