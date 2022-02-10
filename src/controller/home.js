import XLSX from "xlsx";

const home = (req, res) => {

  try {
        if (req.file == undefined) {
          return res.status(400).send("Please upload an excel file!");
        }
        const path = "./public/uploads/" + req.file.originalname;
      console.log({path})
        const excelData = XLSX.readFile(path);

        const data =  Object.keys(excelData.Sheets).map((name) => ({
            name, 
            data: XLSX.utils.sheet_to_json(excelData.Sheets[name]),
        }));
        console.log(data[0].data)
        res.render('index')
        
      } catch (error) {
        res.status(500).send({
          message: "Could not upload the file: " + req.file.originalname,
        });
      }
    };
    

export default home;