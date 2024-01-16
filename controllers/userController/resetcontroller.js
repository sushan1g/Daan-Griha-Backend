const reset = async (req, res) => {
    try {
        console.log(req.body)
        res.send('Reset page using router');
    } catch (error) {
        console.log(error);
        res.send('error found',error)
    }
}

export default reset;