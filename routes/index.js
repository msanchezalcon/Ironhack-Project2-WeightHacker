module.exports = app => {
  
  // Base URLS
  app.use('/', require('./index.routes'))
  app.use('/', require('./auth.routes'))
  app.use('/', require('./profile.routes'))
  app.use('/', require('./app.routes'))
  // app.use('/', require('./upload.routes'))
  
}
