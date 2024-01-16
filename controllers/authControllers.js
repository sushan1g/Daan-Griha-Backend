const home = async (req, res) => {
    try {
        await someAsyncOperation();
        res.status(200).send('Home using router');
    } catch (error) {
        console.log(error);
        res.send('error found',error)
    }
}

const signup = async (req, res) => {
    try {
        console.log(req.body)
        res.status(200).send('Signup Connected using router');
    } catch (error) {
        console.log(error);
        res.send('error found',error)
    }
}

const login = async (req, res) => {
    try {
        console.log(req.body)
        res.status(200).send('Login Connected using router');
    } catch (error) {
        console.log(error);
        res.send('error found',error)
    }
}

const reset = async (req, res) => {
    try {
        console.log(req.body)
        res.status(200).send('Reset page using router');
    } catch (error) {
        console.log(error);
        res.send('error found',error)
    }
}


const about = async (req, res) => {
    try {
        console.log(req.body)
        res.status(200).send('About page using router');
    } catch (error) {
        console.log(error);
        res.send('error found',error)
    }
}


const contact = async (req, res) => {
    try {
        console.log(req.body)
        res.status(200).send('Contact page  Using Router ');
    } catch (error) {
        console.log(error);
        res.send('error found',error)
    }
}

export default home ;  signup ; reset ; login ; about ; contact ;