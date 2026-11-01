// Single source of truth for the games catalog.
// To add a game: add an item here, add its page content to GAME_PAGES in
// src/pages/GamePage.js and drop its poster in public/assets.
export const games = [
  {
    slug: "banze",
    name: "O Refúgio do Banzé",
    summary:
      "Administre um quilombo no período escravocrata e proteja a comunidade.",
    status: "Disponível",
    platforms: ["Android"],
    topics: ["Estratégia e história", "Cultura quilombola"],
    poster: "/assets/banze-poster.jpg", // 7:8 portrait
    banner: "/assets/refugio-banner.jpg", // 4:1 wide
    stores: {
      googlePlay:
        "https://play.google.com/store/apps/details?id=com.BaladeiraStudio.RefugioDoBanze&hl=en-US&ah=lV-6m4YJj7pD-UzKbO1YxH9voPw",
    },
  },
  {
    slug: "brilhante-folclore",
    name: "Brilhante Folclore",
    summary:
      "Chapéu de couro na cabeça e espingarda na mão: Jesuíno Brilhante enfrenta as lendas do Rio Grande do Norte.",
    status: "Em breve",
    platforms: ["Android"],
    topics: ["Ação por ondas", "Folclore potiguar"],
    poster: "/assets/brilhante-poster.jpg", // 7:8 portrait
    banner: "/assets/brilhante/sky.webp",
    stores: {}, // no public download yet
  },
];

export const getGame = (slug) => games.find((g) => g.slug === slug);
