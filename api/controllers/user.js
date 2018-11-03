
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import User from '../models/User';


// Create user
export function create(req, res, next) {
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            console.log(user);
            if (user.length >= 1) {
                return res.status(409).json({
                    message: 'Email exist. Please try different email.'
                })
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        })
                    } else {
                        const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            email: req.body.email,
                            password: hash
                        });
                        user.save()
                            .then(result => {
                                return res.status(201).json({
                                    message: 'User created',
                                    result
                                });
                            })
                            .catch(err => {
                                return res.status(401).json({
                                    message: err.message
                                })
                            })
                    }
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: err.message
            })
        })
}

export function remove(req, res, next) {
    User.remove({ _id: req.params.userId })
        .exec()
        .then(result => {
            return res.status(200).json({
                message: 'User deleted',
                result,
            })
        })
        .catch(err => {
            res.status(500).json({
                message: err.message
            })
        })
}