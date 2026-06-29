const express = require('express')
const router = express.Router()
const prisma = require('../prismaClient')

// POST /api/admin/login
router.post('/login', (req, res) => {
  const { password } = req.body
  if (password === process.env.ADMIN_PASSWORD) {
    res.json({ success: true, token: process.env.ADMIN_PASSWORD })
  } else {
    res.status(401).json({ success: false, message: 'Invalid password' })
  }
})

// GET /api/admin/bookings
router.get('/bookings', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1]
  if (token !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ message: 'Unauthorized' })
  }
  try {
    const experienceBookings = await prisma.experienceBooking.findMany({
      include: { experience: true },
      orderBy: { createdAt: 'desc' }
    })
    const accommodationBookings = await prisma.accommodationBooking.findMany({
      include: { accommodation: true },
      orderBy: { createdAt: 'desc' }
    })
    res.json({ experienceBookings, accommodationBookings })
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch bookings' })
  }
})

module.exports = router
