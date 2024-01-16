const login = async  (req, res) => {
    try {
        console.log(req.body)
        res.send('Login Connected using router');
    } catch (error) {
        console.log(error);
        res.send('error found',error)
    }
}

export default login;