import { Router } from 'express'
import controller from '..\controllers\users'

const router = Router()

router.route('/')
    .get((req, res, next) => {
        /*controller.getStudents()
            .then(students => res.status(200).send(students))
            .finally(next)*/
            res.send('Hello, Users!');

    })
export default router;
