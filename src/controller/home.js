import XLSX from "xlsx";

const home = (req, res) => {
    console.log(req.body)
    try {
        if (req.body.file == undefined) {
          return res.status(400).send("Please upload an excel file!");
        }
        const path = "/public/uploads/" + req.body.file;
      console.log(path)
        const excelData = XLSX.readFile(path);

        const data =  Object.keys(excelData.Sheets).map((name) => ({
            name, 
            data: XLSX.utils.sheet_to_json(excelData.Sheets[name]),
        }));
        console.log(excelData)
        res.render('index')
        
      } catch (error) {
        console.log(error);
        res.status(500).send({
          message: "Could not upload the file: " + req.file.originalname,
        });
      }
    };
    

export default home;