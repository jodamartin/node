const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
  res.render('index');
};

exports.addStore = async (req, res) => {
  res.render('editStore', { title: 'Add Store' });
  // debugger;
};

exports.createStore = async (req, res) => {
  // debugger;
  const store = new Store(req.body);
  await store.save();
  // the below code is how wes does it for some reason
  // const store = await (new Store(req.body)).save();
  req.flash('success', `Successfully created ${store.name}`);
  res.redirect(`/store/${store.slug}`);
};
