const about = async (req, res) => {
    try {
        console.log(req.body)
        res.status(200).send('About page using router');
    } catch (error) {
        console.log(error);
        res.send('error found',error)
    }
}

export default about ;