// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import { type } from "os";

// Aclaramos que la res va a ser de tipo Data(le podemos poner lo que queramos dentro)
type Data = {
  name:string;
}

// En la migracion a TS le ponemos los tipos de parametros, Next ya tiene 
// especificado los tipos aca 
export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: 'John Doe' })
}
