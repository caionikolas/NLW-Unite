import { prisma } from '../src/lib/prisma'

export async function seed(){
  await prisma.event.create({
    data: {
      id: '56d84e94-954a-4d25-bac8-86bef48ebd72',
      title: 'Unite Summit',
      slug: 'unite-summit',
      details: 'Um evento de tecnologia',
      maximumAttendees: 120,
    }
  })
}

seed().then(() => {
  console.log('Database seeded!')
  prisma.$disconnect
})