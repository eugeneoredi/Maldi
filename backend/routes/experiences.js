const express = require('express')
const router = express.Router()
const prisma = require('../prismaClient')

// GET all experiences
router.get('/', async (req, res) => {
  try {
    const experiences = await prisma.experience.findMany()
    res.json(experiences)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to fetch experiences' })
  }
})

// GET single experience
router.get('/:id', async (req, res) => {
  try {
    const experience = await prisma.experience.findUnique({
      where: { id: parseInt(req.params.id) }
    })
    if (!experience) return res.status(404).json({ error: 'Experience not found' })
    res.json(experience)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to fetch experience' })
  }
})

// POST book an experience
router.post('/:id/book', async (req, res) => {
  try {
    const { fullName, email, phone, date, numberOfGuests, specialRequests } = req.body
    const booking = await prisma.experienceBooking.create({
      data: {
        fullName,
        email,
        phone,
        date: new Date(date),
        numberOfGuests: parseInt(numberOfGuests),
        specialRequests,
        experienceId: parseInt(req.params.id)
      }
    })
    res.status(201).json(booking)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to create booking' })
  }
})

module.exports = router
