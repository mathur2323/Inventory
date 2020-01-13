const express = require('express');
const router = express.Router();
const Category = require('./../../models/Category');
const User = require('./../../models/User');

router.post('/', (req, res) => {
    const { userUuid, categories } = req.body;
    User.findById({ _id: userUuid })
        .then(user => {
            const newCategory = new Category({
                userUuid,
                categories
            })

            newCategory.save()
                .then((Category) => res.json(Category));
        })
        .catch(err => res.status(400).json("User does not exist"))

})

router.put('/', (req, res) => {
    Ca
})

module.exports = router