const userRoutes = (app, fs) => {

  // variables
  const dataPath = './data/asanas.json';

  // helper methods
  const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
      fs.readFile(filePath, encoding, (err, data) => {
          if (err) {
              throw err;
          }

          callback(returnJson ? JSON.parse(data) : data);
      });
  };

  const writeFile = (fileData, callback, filePath = dataPath, encoding = 'utf8') => {

      fs.writeFile(filePath, fileData, encoding, (err) => {
          if (err) {
              throw err;
          }

          callback();
      });
  };

  // READ
  app.get('/asanas', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
          if (err) {
              throw err;
          }

          res.send(JSON.parse(data));
      });
  });

  // // CREATE
  // app.post('/asanas', (req, res) => {

  //     readFile(data => {
  //         const newUserId = Object.keys(data).length + 1;

  //         // add the new user
  //         data[newUserId.toString()] = req.body;

  //         writeFile(JSON.stringify(data, null, 2), () => {
  //             res.status(200).send('new user added');
  //         });
  //     },
  //         true);
  // });


  // // UPDATE
  // app.put('/asanas/:id', (req, res) => {

  //     readFile(data => {

  //         // add the new user
  //         const userId = req.params["id"];
  //         data[userId] = req.body;

  //         writeFile(JSON.stringify(data, null, 2), () => {
  //             res.status(200).send(`asanas id:${userId} updated`);
  //         });
  //     },
  //         true);
  // });


  // // DELETE
  // app.delete('/asanas/:id', (req, res) => {

  //     readFile(data => {

  //         // add the new user
  //         const userId = req.params["id"];
  //         delete data[userId];

  //         writeFile(JSON.stringify(data, null, 2), () => {
  //             res.status(200).send(`asanas id:${userId} removed`);
  //         });
  //     },
  //         true);
  // });
};

module.exports = userRoutes;
