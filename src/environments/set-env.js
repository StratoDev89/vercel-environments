function setEnv() {
  const fs = require("fs");
  const writeFile = fs.writeFile;
  const targetPath = "./src/environments/environment.prod.json";
  // const envConfigFile = process.env.FIREBASE;
  const envConfigFile = '{"title":"heyy"}';


  console.log(
    `The file environment.prod.json will be written with the following content: ${envConfigFile} \n`
  );

  writeFile(targetPath, envConfigFile, function (err) {
    if (err) {
      console.error(err);
      throw err;
    } else {
      console.log(
        "Angular environment.prod.json file generated correctly at" +
          targetPath +
          "\n"
      );
    }
  });
}

setEnv();
