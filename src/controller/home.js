import XLSX from "xlsx";
import models from "../models/user.js";

const home = async (req, res) => {
  const { file } = req;
  try {
    if (file == undefined) {
      return res.status(400).send("Please upload an excel file!");
    }
    // const path = "./public/uploads/" + file.originalname;

    const excelData = XLSX.read(file.buffer);

    const [sheetData] = Object.keys(excelData.Sheets).map((name) => ({
      name,
      data: XLSX.utils.sheet_to_json(excelData.Sheets[name]),
    }));
    
    await models.insertMany(sheetData.data)
    res.render('index')

  } catch (error) {
    console.log(error)
    res.status(500).send({
      message: "Could not upload the file: " + file.originalname,
    });
  }
};


export default home;