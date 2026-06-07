import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.project.create({
    data: {
      nama: "Toyota Avanza",
      slug: "toyota-avanza",
      pekerjaan: "Ketok Magic Pintu Kiri",
      durasi: "3 Hari",
      deskripsi:
        "Perbaikan penyok pintu kiri dengan teknik ketok magic.",
      thumbnail:
        "/images/before-after/before1.jpg",
      beforeImage:
        "/images/before-after/before1.jpg",
      afterImage:
        "/images/before-after/after1.jpg",
      youtubeUrl:
        "https://youtube.com/watch?v=test",
    },
  });

  console.log("Berhasil");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });