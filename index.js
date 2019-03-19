const { prisma } = require('./generated/prisma-client')

// async function main() {
//   const query = `
//     query {
//       caregivers {
//         cgid
//       }
//     }
//   `
//   const allCaregivers = await prisma.$graphql(query);
//   console.log(allCaregivers);
// }

async function main() {
  const cgs = await prisma.caregiver({ id: '1' });
  console.log(cgs)
}

main().catch(e => console.error(e))


