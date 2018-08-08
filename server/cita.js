const express = require('express');
const router = express.Router;

const Cita = require('../models/cita');
const DoneCita = require('../models/donecita');

// GET request for citas
router.get('/citas', (req, res, next) => {
    Cita.find({}, (err, citas) => {
        if (err) return next(err);
        res.status(200).json(citas);
    });
});

// POST request for citas
router.post('/', (req, res, next) => {
    let newCita = new Cita({
        pacient: req.body.pacient,
        reason: req.body.reason,
        completed: false
    });

    newCita.save((err, cita) => {
        if (err) return next(err);
        res.status(200).json(cita);
    });
});

// PUT request to update or change cita already saved
router.put('/:id/completed', (req, res, next) => {
    Cita.findById(req.params.id, (err, cita) => {
        if (err) return next(err);
        if (!cita) {
            return res.status(404).json({
                message: 'An error occurred',
                error: { message: 'Cita could not be found' }
            });
        }

        cita.pacient = req.body.pacient
        cita.reason = req.body.reason
        cita.completed = req.body.completed

        cita.save((err, cita) => {
            if (err) return next(err);
            res.status(200).json(cita);
        });
    });
});

// DELETE request and saving done cita to another collection
router.delete('/:id/completed', (req, res, next) => {
    Cita.findById(req.params.id, (err, cita) => {
        if (err) return next(err);
        if (!cita) {
            return res.status(404).json({
                message: 'An error occurred',
                error: { message: 'Cita could not be found'}
            });
        }

        let newDone = new DoneCita({
            pacient: cita.pacient,
            reason: cita.reason,
            completed: cita.completed
        });

        cita.remove((err, cita) => {
            if (err) return next(err);
            newDone.save((err, done) => {
                if (err) return next(err);
                res.status(200).json({
                    citaRemoved: cita,
                    archived: done
                });
            });
        });
    });
});
