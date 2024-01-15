import express from 'express';

const router = express.Router();


router.route('/').get(
    (req,res) => {
        console.log(req.body)
        res.status(200).send('Home page using router');
    });


router.route('/signup').get(
(req,res) => {
    console.log(req.body)
    res.status(200).send('Signup Connected using router');
});

router.route('/login').get(
    (req,res) => {
        console.log(req.body)
        res.status(200).send('Login Connected using router');
    });
 router.route('/reset').get(
        (req,res) => {
            console.log(req.body)
            res.status(200).send('Reset page using router');
        });

 router.route('/about').get(
      (req,res) => {
         console.log(req.body)
          res.status(200).send('About page using router');
      });


 router.route('/contact').get(
    (req,res) => {
         console.log(req.body)
         res.status(200).send('Contact page  Using Router ');
      });




export default router;