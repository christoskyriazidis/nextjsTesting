// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    console.log("post");
  } else if (req.method === "DELETE") {
    console.log("delete");
  } else if (req.method === "GET") {
    console.log("edw");
    res.status(200).json({ name: "mesa" });
  }
}
