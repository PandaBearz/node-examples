const express = require('express');
const partnerRouter = express.Router();

partnerRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the campsites partners to you');
})
.post((req, res) => {
    res.end(`Will add the campsite's partner: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /partners');
})
.delete((req, res) => {
    res.end('Deleting all partners');
});


partnerRouter.route('/:partnersId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send partners details of the campsite: ${req.params.partnersId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`Will add the campsite's partner: ${req.body.name} with description: ${req.body.description}`);
})
.put( (req, res) => {
    res.write(`Updating the partners: ${req.params.partnersId}\n`);
    res.end(`Will update the partners: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting campsite partners: ${req.params.partnersId}`);
});


module.exports = partnerRouter;