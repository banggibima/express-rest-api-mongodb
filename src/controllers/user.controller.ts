import { Request, Response } from 'express';
import User from '../models/user.model';

const findMany = async (req: Request, res: Response) => {
  try {
    console.log(`GET /api/users/`);
    const users = await User.find();
    res.status(200).json({
      code: 200,
      message: 'success',
      success: true,
      data: users,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      code: 500,
      message: err,
      success: false,
      data: null,
    });
  }
};

const findOne = async (req: Request, res: Response) => {
  try {
    console.log(`GET /api/users/${req.params.id}`);
    const user = await User.findById(req.params.id);
    res.status(200).json({
      code: 200,
      message: 'success',
      success: true,
      data: user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      code: 500,
      message: err,
      success: false,
      data: null,
    });
  }
};

const createOne = async (req: Request, res: Response) => {
  try {
    console.log(`POST /api/users/`);
    const user = await User.create(req.body);
    res.status(201).json({
      code: 201,
      message: 'success',
      success: true,
      data: user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      code: 500,
      message: err,
      success: false,
      data: null,
    });
  }
};

const updateOne = async (req: Request, res: Response) => {
  try {
    console.log(`PUT /api/users/${req.params.id}`);
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      code: 200,
      message: 'success',
      success: true,
      data: user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      code: 500,
      message: err,
      success: false,
      data: null,
    });
  }
};

const removeMany = async (req: Request, res: Response) => {
  try {
    console.log(`DELETE /api/users/`);
    const users = await User.deleteMany();
    res.status(200).json({
      code: 200,
      message: 'success',
      success: true,
      data: users,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      code: 500,
      message: err,
      success: false,
      data: null,
    });
  }
};

const removeOne = async (req: Request, res: Response) => {
  try {
    console.log(`DELETE /api/users/${req.params.id}`);
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      code: 200,
      message: 'success',
      success: true,
      data: user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      code: 500,
      message: err,
      success: false,
      data: null,
    });
  }
};

export { findMany, findOne, createOne, updateOne, removeMany, removeOne };
