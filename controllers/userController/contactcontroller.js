const contact = async (req, res) => {
    try {
        console.log(req.body)
        res.status(200).send('Contact page  Using Router ');
    } catch (error) {
        console.log(error);
        res.send('error found',error)
    }
}

export default contact;