import { Request, Response } from 'express';
import getUsers from '../services/search.service';

interface callback {
  [key: string]: (req: Request, res: Response) => void;
}

const SearchController: callback = {};

SearchController.getUsers = async (req, res) => {
  const result = await getUsers(req.params.value);
  if (result) return res.status(200).json(result);
  return res.status(500).end();
};

export default SearchController;
