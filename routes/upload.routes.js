// const express = require('express')
// const router = express.Router()
// const multer = require('multer')
// const Picture = require('../models/picture.model')


// router.get('/', (req, res, next) => res.render('index'))

// router.get('/gallery', (req, res, next) => {

//     Picture.find()
//         .then(allThePictures => res.render('pages/gallery-page', { allThePictures }))
//         .catch(err => next(new Error(err)))

// })


// // File upload settings
// const uploadLocal = multer({ dest: './public/uploads/' })


// // Local upload files routes
// router.get('/upload-local', (req, res, next) => res.render('files/upload-form-local'))

// router.post('/upload-local', uploadLocal.single('imageFile'), (req, res, next) => {

//     console.log("Multer crea la propiedad 'file' en el objeto req:", req.file)

//     // Validador
//     req.file.size > 3000000 ? console.log("El tamaño de imagen es tochísimo") : console.log('El tamaño de imagen mola')

//     Picture.create({
//         name: req.body.imageName,
//         path: `/uploads/${req.file.filename}`,
//         originalName: req.file.originalname
//     })
//         .then(() => res.redirect('/gallery'))
//         .catch(err => next(new Error(err)))
// })






// // CDN file upoloads routs

// const cloudUploader = require('../configs/cloudinary.config')

// router.get('/upload-cdn', (req, res, next) => res.render('files/upload-form-cdn'))

// router.post('/upload-cdn', cloudUploader.single('imageFile'), (req, res, next) => {

//     console.log('Multer, en combinación con Cloudinary, crea este req.file:', req.file)

//     Picture.create({
//         name: req.body.imageName,
//         path: req.file.url,
//         originalName: req.file.originalname
//     })
//         .then(() => res.redirect('/gallery'))
//         .catch(err => next(new Error(err)))
// })


// module.exports = router