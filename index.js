const { prisma } = require('./generated/prisma-client')

async function main() {
  // Read all caregivers from the database and print them to the console
  const firstCaregiver = await prisma.caregiver({row_id: "1"})
  console.log(firstCaregiver)
}

main().catch(e => console.error(e))
