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
  return fs.readdirAsync(dir).then(fileNamesArr => {
    const filteredFileNames = _.filter(fileNamesArr, (fileName) => {
        return /^([^.\s]+)(\.jpg|\.png|\.gif)?/.test(fileName)
    })
    return Promise.all(filteredFileNames);
  }).catch((error) => {
    console.error(error)
    return []
  });
};

const getParentDirectory = (dir) => dir.substr(0, dir.lastIndexOf('/'))

const filterNonImageFiles = (files) => _.filter(files, (file) => {
  return /^([^.\s]+)(\.jpg|\.png|\.gif)?/.test(file)
})

module.exports = {
  getAllFiles, getParentDirectory, filterNonImageFiles
};