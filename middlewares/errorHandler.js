//not Found

const notFound = (res,req, next) => {
    const err = new Error (`NOt Found: ${req.originalUrl}`);
    res.status(404);
    next(error);
};

//errorHandler 

const errorHandler = (err,req, res, next) => {
    const statuscode = res.statuscode == 200 ? 500 : res.statuscode;
    req.status(statuscode);
    res.json({
        message: err?.message,
        stack: err?.stack,
    });
};

module.exports = {errorHandler, notFound};
