import * as fs from "fs";
export default async function getAchivementsData(req, res) {
  console.log("this is hitting");
  let myFile;
  let allBlogs = [];
  myFile = await fs.promises.readFile(
    `JSON/achivements.json`,
    "utf-8",
    (err, data) => {
      if (err) {
        res.status(500).json({ message: "No such blog found" });
      }
      res.status(200).json(JSON.parse(data));
    }
  );
  allBlogs.push(JSON.parse(myFile));
  res.status(200).json(allBlogs);
}
