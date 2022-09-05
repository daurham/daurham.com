const model = require('./model');
//* MongoDB
const getData = (req, res) => {
  model.getData();
};
const postData = (req, res) => {
  model.postData();
};
const updateData = (req, res) => {
  model.updateData();
};
const deleteData = (req, res) => {
  model.deleteData();
};
// */
/* SQL
const getData = (req, res) => {
  model.getData();
};
const postData = (req, res) => {
  model.postData();
};
const updateData = (req, res) => {
  model.updateData();
};
const deleteData = (req, res) => {
  model.deleteData();
};
// */
module.exports = { getData, postData, updateData, deleteData };