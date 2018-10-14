const Promise = require('bluebird');
const _ = require('lodash');

// turns off forgotten return warning in Bluebird
Promise.config({
  warnings: {
    wForgottenReturn: false
  }
});

const fs = Promise.promisifyAll(require('fs'));

const readFile = dir => {
    return fs.readFileAsync(dir).then(text => text);
};

// this function accesses the file system
// it returns a promise

const getAllFiles = (dir) => {
  return fs.readdirAsync(dir)
  .then(fileNamesArr => {
    const filteredFileNames = _.filter(fileNamesArr, (fileName) => {
        return /^([^.\s]+)(\.jpg|\.png|\.gif)?/.test(fileName)
    })
    const fileStatPromises = filteredFileNames.map(fileName => {
      return fs.statAsync(dir + '/' + fileName)
      .then(stats => {
        const file = {};
        file.filePath = dir + '/' + fileName;
        file.isDirectory = !stats.isFile();
        return file;
      });
    });
    return Promise.all(fileStatPromises);
  });
};

module.exports = {
  getAllFiles, readFile
};