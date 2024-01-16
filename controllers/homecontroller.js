const home = async (req, res) => {
    try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        res.status(200).send('Home using router');
    } catch (error) {
        console.log(error);
        res.send('error found',error)
    }
}


export default  home ;