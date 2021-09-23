import prisma from "../../src/db/db";
import { Prisma } from ".prisma/client";
import seedData from "./source/parser";

async function main() {
  Object.keys(Prisma.ModelName).reduce(async (promise, tbName) => {
    await promise;
    // not ideal cast as any
    return (prisma as any)[tbName].createMany({
      data: seedData[tbName],
    });
  }, Promise.resolve());
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
