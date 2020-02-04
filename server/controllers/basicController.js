const basicController = {};

basicController.get = (req, res) => {
    res.json({
        message: 'Welcome to our Api'
    });
}

export default basicController;