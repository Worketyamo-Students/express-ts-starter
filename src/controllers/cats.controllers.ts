import { Request, Response } from 'express';
import { HttpCode } from '../core/constants';
import Chatons from '../core/constants/mock.chatons';

const Controllers = {
	getAllCats: (req: Request, res: Response): void => {
		res.send(Chatons).status(HttpCode.OK);
	},

	getCatById: (req: Request, res: Response): void => {
		const ChatonsId = req.params.id;
		Chatons.find((el) => {
			if (el.id === ChatonsId) {
				res.send(el).status(HttpCode.OK);
			} else {
				res.send({ msg: "L'objet demandé n'existe pas " }).status(HttpCode.NOT_FOUND);
			}
		});
	},
	getCatsFamily: (req: Request, res: Response): void => {
		const ChatonsRace = req.params.race;
		const lesChats = Chatons.filter((el) => el.race === ChatonsRace);
		if (lesChats) {
			res.send(lesChats).status(HttpCode.OK);
		}
	}
};

export default Controllers;
