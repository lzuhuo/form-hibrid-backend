const express = require('express');
const router = express.Router();
let TicketController = require('../controllers/ticket.Controller');

//Routes de Controllers
router.get('/', TicketController.getTickets);
router.get('/:cd_ocorrencia', TicketController.getTicketbyID);
router.post('/', TicketController.postTicket);
router.put('/:cd_ocorrencia', TicketController.putTicket);

module.exports = router;