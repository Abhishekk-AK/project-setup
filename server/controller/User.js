const User = require('../models/User')

exports.createUser = async (req, res) => {
    try {
        const {firstName, lastName, email, age} = req.body

        const user = await User.create(
            {
                firstName, lastName, email, age
            }
        )

        return res.status(200).json({
            data:user,
            success:true,
            message:'User created.'
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            success:false,
            message:'Internal Server Error'
        })
    }
}

exports.getUserDetails = async (req, res) => {
    try {
        const user = await User.find()

        return res.status(200).json({
            data:user,
            success:true,
            message:'User details fetched'
        })

    } catch (err) {
        console.log(err)
        return res.status(500).json({
            success:false,
            message:'Internal Server Error'
        })
    }
}