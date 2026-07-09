// Фото робіт лежать у public/works/ і називаються 1.webp, 2.webp, 3.webp ...
// Щоб додати нові роботи — закинь фото в папку public/works та зміни WORKS_COUNT
export const WORKS_COUNT = 60;

export const works = Array.from(
  { length: WORKS_COUNT },
  (_, i) => `/works/${i + 1}.webp`,
);
