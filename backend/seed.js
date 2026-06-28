const { PrismaClient } = require('@prisma/client')
const { PrismaPg } = require('@prisma/adapter-pg')
const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  // Seed Experiences
  await prisma.experience.createMany({
    data: [
      { title: 'Deep Sea Fishing', description: 'Head out into the Indian Ocean for marlin, sailfish, and tuna with experienced local captains.', duration: 'Full day', price: 15000, emoji: '🎣' },
      { title: 'Marine Park Snorkeling', description: 'Explore the vibrant coral reefs of Malindi Marine National Park teeming with tropical fish.', duration: 'Half day', price: 3500, emoji: '🤿' },
      { title: 'Gede Ruins Cultural Tour', description: 'Walk through the ancient Swahili ruins of Gede and learn about the rich coastal heritage.', duration: '3 hours', price: 2000, emoji: '🏛️' },
      { title: 'Sunset Dhow Cruise', description: 'Sail along the coast on a traditional dhow as the sun sets over the Indian Ocean.', duration: '2 hours', price: 4500, emoji: '⛵' },
      { title: 'Watamu Turtle Watch', description: 'Visit the Kenya Sea Turtle Conservation Program and witness nesting sea turtles up close.', duration: 'Half day', price: 2500, emoji: '🐢' },
      { title: 'Arabuko-Sokoke Forest Walk', description: 'Trek through one of East Africa\'s last remaining coastal forests, home to rare birds and elephants.', duration: 'Half day', price: 3000, emoji: '🌿' },
    ]
  })

  // Seed Accommodations
  await prisma.accommodation.createMany({
    data: [
      { name: 'Beachfront Cottage', location: 'Silversands Beach, Malindi', description: 'A cozy private cottage steps from the beach, ideal for couples and small families.', price: 8000, guests: 4, emoji: '🏡', tags: ['Beach', 'Private', 'Wifi'] },
      { name: 'Coral Reef Villa', location: 'Casuarina Beach, Malindi', description: 'Spacious villa with private pool, ocean views, and a dedicated house manager.', price: 25000, guests: 8, emoji: '🏊', tags: ['Pool', 'Villa', 'Ocean View'] },
      { name: 'Watamu Beach Lodge', location: 'Watamu, Kilifi County', description: 'Boutique lodge surrounded by indigenous gardens, minutes from Watamu Marine Park.', price: 12000, guests: 6, emoji: '🌴', tags: ['Garden', 'Lodge', 'Marine Park'] },
      { name: 'Old Town Swahili House', location: 'Malindi Old Town', description: 'Restored historic Swahili architecture with authentic decor and rooftop terrace.', price: 10000, guests: 5, emoji: '🕌', tags: ['Heritage', 'Rooftop', 'Cultural'] },
      { name: 'Driftwood Beach Club Room', location: 'Malindi Town', description: 'Classic Malindi accommodation with direct beach access, restaurant, and pool.', price: 7500, guests: 2, emoji: '🏖️', tags: ['Beach Club', 'Restaurant', 'Pool'] },
      { name: 'Mangrove Eco Camp', location: 'Mida Creek, Watamu', description: 'Off-grid eco tents on the edge of Mida Creek, perfect for nature lovers.', price: 5000, guests: 2, emoji: '⛺', tags: ['Eco', 'Nature', 'Creek'] },
    ]
  })

  console.log('Database seeded successfully!')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())