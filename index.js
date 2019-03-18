const { prisma } = require('./generated/prisma-client')

async function main() {
  const query = `
    query {
      caregivers {
        cgid
      }
    }
  `
  const allCaregivers = await prisma.$graphql(query);
  console.log(allCaregivers);
}

main().catch(e => console.error(e))
