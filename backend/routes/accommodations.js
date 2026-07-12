const express = require('express')
const router = express.Router()
const prisma = require('../prismaClient')

// GET all accommodations
router.get('/', async (req, res) => {
  try {
    const accommodations = await prisma.accommodation.findMany()
    res.json(accommodations)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to fetch accommodations' })
  }
})

// GET single accommodation
router.get('/:id', async (req, res) => {
  try {
    const accommodation = await prisma.accommodation.findUnique({
      where: { id: parseInt(req.params.id) }
    })
    if (!accommodation) return res.status(404).json({ error: 'Accommodation not found' })
    res.json(accommodation)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to fetch accommodation' })
  }
})

// POST book an accommodation
router.post('/:id/book', async (req, res) => {
  try {
    const { fullName, email, phone, checkIn, checkOut, numberOfGuests, maidService, specialRequests } = req.body
    const booking = await prisma.accommodationBooking.create({
      data: {
        fullName,
        email,
        phone,
        checkIn: new Date(checkIn),
        checkOut: new Date(checkOut),
        numberOfGuests: parseInt(numberOfGuests),
        maidService: Boolean(maidService),
        specialRequests,
        accommodationId: parseInt(req.params.id)
      }
    })
    res.status(201).json(booking)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to create booking' })
  }
})

module.exports = router
