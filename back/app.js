const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const multiparty = require('connect-multiparty');
const cors = require('cors');
const postRouter = require('./routes/post');
const fs = require('fs');
const { v4 } = require('uuid');
const path = require('path');
const multipartyMiddelware = multiparty({ uploadDir: './images' });
const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use('/post', postRouter);

app.get('/', (req, res) => {
    res.send("ㅎㅇ");
})

//이거 나중에 multer이용해서 받은거 디비에 저장하고... 그러고 게시물이랑 해줘야할듯?.....
//multer수업듣고나서 합시다.
app.post('/uploads', multipartyMiddelware, (req, res) => {
    //const orifilepath = req.files.upload.path;
    //const orifilename = req.files.upload.name;
    //const srvfilename = v4() + path.extname(orifilename);
    //fs.readFile(orifilepath, function (err, data) {
      //  var newPath = __dirname + '/../public/uploads/' + srvfilename;
        //fs.writeFile(newPath, data, function (err) {
          //  if (err) console.log({ err: err });
            //else {
              //  const html = "{\"filename\" : \"" + orifilename + "\", \"uploaded\" : 1, \"url\": \"/uploads/" + srvfilename + "\"}"
                //console.log(html)
                //res.send(html);
            //}
        //});
    //});
    console.log(req.files.upload);
    //console.log(orifilepath);
    //console.log(orifilename);
    //console.log(srvfilename);
})

app.listen(3085, () => {
    console.log("서버 실행 중");
})