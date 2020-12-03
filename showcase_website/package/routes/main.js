const express = require('express')
const router = express.Router()
const ProjectController = require('../controllers/ProjectController')

router.get('/', (req, res) => {
    const data = req.context//{page:..., global:...}

    const projectCtr = new ProjectController()
    projectCtr.get()
        .then(projects => {
            data['projects'] = projects
            res.render('landing', data) //Renvoie vers landing.json, la ou sont stockees les donnees
        })
        .catch(err => {
            res.send('Oops '+err.message)
        })


})

router.get('/project/:slug', (req, res) => {
    const data = req.context
    const projectSlug = req.params.slug

    const projectCtr = new ProjectController()
    projectCtr.get({slug:projectSlug })
        .then(projects => {
            if(projects.length == 0){
               throw new Error('project not found')
                return
            }
            const project = projects[0]
            data['project'] = project
            res.render('project', data)
        })
        .catch(err => {
            res.send('OOPS' + err.message)
        })
})


module.exports = router