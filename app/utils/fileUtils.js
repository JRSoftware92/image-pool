const Promise = require('bluebird');
const _ = require('lodash');

// turns off forgotten return warning in Bluebird
Promise.config({
  warnings: {
    wForgottenReturn: false
  }
});

const fs = Promise.promisifyAll(require('fs'));

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

const getParentDirectory = (dir) => dir.substr(0, dir.lastIndexOf('/'))

module.exports = {
  getAllFiles, getParentDirectory
};