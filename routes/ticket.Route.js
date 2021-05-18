const express = require('express');
const router = express.Router();
let TicketController = require('../controllers/ticket.Controller');

//Routes de Controllers
router.get('/', TicketController.getTickets);
router.get('/:user_id', TicketController.getTicketbyID);
router.post('/', TicketController.postTicket);

module.exports = router;