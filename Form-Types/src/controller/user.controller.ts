import UserModel from "../model/User"
import { Request, Response } from "express";

export default class UserController {

    constructor(
        private readonly userModel: UserModel
    ){

    }

    getTotalPages = async (_req: Request, res: Response) => {
        try {
            const numPages = this.userModel.getTotalPages()
            res.status(200).json({numPages})
        } catch (error) {
            res.status(500).json({ 'message': 'Internal error server' })
        }
    }

    getById = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const user = this.userModel.getById(id)
            if (user) {
                res.status(200).json({"data": user})
            }
        } catch (error) {
            res.status(500).json({ 'message': 'Internal error server' })
        }
    }

    getAll = async (_req: Request, res: Response) => {
        try {
            const users = this.userModel.getAll()
            res.status(200).json({'data': users})
        } catch (error) {
            res.status(500).json({ 'message': 'Internal error server' })
        }
    }
}