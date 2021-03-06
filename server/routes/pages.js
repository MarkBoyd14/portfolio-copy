const {
  about,
  resume,
  projects,
  contact,
} = require('../controllers/pagesController');

module.exports = (router) => {
  router.get('/', about);
  router.get('/resume', resume);
  router.get('/projects', projects);
  router.get('/contact', contact);
};
