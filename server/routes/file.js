const path = require('path');
const express = require('express');
const multer = require('multer');
const router = express.Router();

const File = require('../models/file');

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, cb){
            cb(null, './files');
        },
        filename(req, file, cb){
            cb(null, `${new Date().getTime()}_${file.originalname}`);
        }
    }),
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls)$/)){
            return cb(
                new Error(
                    'Only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format'
                )
            );
        }
        cb(undefined, true);
    }
});

router.post('/upload/:username', upload.single('file'), async(req, res)=> {
    try {
      const { title, description } = req.body;
      const {path, mimetype} = req.file;
      const file = new File({
          title,
          description,
          username: req.params.username,
          file_path: path,
          file_mimetype: mimetype
      })
      await file.save();
      res.send('File uploaded successfully')
    } catch (error) {
        res.status(400).send('Error while uploading file')
    }
},
   (error, req, res, next) => {
       if(error){
           res.status(500).send(error.message);
       }
   });

router.get('/getAllFiles/:username', async(req, res)=> {
    try {
     const files = await File.find({username: req.params.username});
     res.send(files);  
    } catch (error) {
       res.status(400).send('Error while getting list of files try again later') 
    }
});

router.get('/download/:id', async(req, res)=> {
    try {
        const file = await File.findById(req.params.id);
        res.set({
            'Content-Type': file.file_mimetype
        });
        res.sendFile(path.join(__dirname, '..', file.file_path));
    } catch (error) {
       res.status(400).send('Error while downloading file, try again later..');   
    }
})

module.exports = router;