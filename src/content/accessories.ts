export const sockReferences = [
  {
    "src": "/media/socks/sock-03.jpg",
    "alt": "Cream ribbed socks with sage-green toes and heels and navy cuff stripes",
    "category": "Socks"
  },
  {
    "src": "/media/socks/sock-05.jpg",
    "alt": "Blue patterned socks with bow motifs and scalloped cuffs",
    "category": "Socks"
  },
  {
    "src": "/media/socks/sock-04.jpg",
    "alt": "Black socks with a white daisy motif",
    "category": "Socks"
  },
  {
    "src": "/media/socks/sock-10.jpg",
    "alt": "White socks with black bow embroidery",
    "category": "Socks"
  }
];

export const gloveReferences = [
  {
    "src": "/media/gloves/Black glove with WINTEX cuff embroidery-1.png",
    "alt": "Black glove with WINTEX cuff embroidery reference",
    "category": "Gloves"
  },
  {
    "src": "/media/gloves/Camel gloves with WINTEX cuff embroidery-4.png",
    "alt": "Camel gloves with WINTEX cuff embroidery reference",
    "category": "Gloves"
  },
  {
    "src": "/media/gloves/Light grey gloves with WINTEX cuff embroidery-3.png",
    "alt": "Light grey gloves with WINTEX cuff embroidery reference",
    "category": "Gloves"
  },
  {
    "src": "/media/gloves/Navy gloves with WINTEX cuff embroidery-5.png",
    "alt": "Navy gloves with WINTEX cuff embroidery reference",
    "category": "Gloves"
  },
  {
    "src": "/media/gloves/Taupe gloves with WINTEX cuff embroidery-6.png",
    "alt": "Taupe gloves with WINTEX cuff embroidery reference",
    "category": "Gloves"
  },
  {
    "src": "/media/gloves/WINTEX embroidery on charcoal glove cuff-2.png",
    "alt": "WINTEX embroidery on charcoal glove cuff reference",
    "category": "Gloves"
  }
];

export const capReferences = [
  {
    "src": "/media/caps/Charcoal cable-knit beanie with WINTEX label-2.png",
    "alt": "Charcoal cable-knit beanie with WINTEX label reference",
    "category": "Knitted caps"
  },
  {
    "src": "/media/caps/Ivory ribbed beanie with WINTEX label-5.png",
    "alt": "Ivory ribbed beanie with WINTEX label reference",
    "category": "Knitted caps"
  },
  {
    "src": "/media/caps/Pale blue ribbed beanie with WINTEX label-4.png",
    "alt": "Pale blue ribbed beanie with WINTEX label reference",
    "category": "Knitted caps"
  },
  {
    "src": "/media/caps/Silver Grey Cable-Knit Beanie with WINTEX Label-1.png",
    "alt": "Silver Grey Cable-Knit Beanie with WINTEX Label reference",
    "category": "Knitted caps"
  },
  {
    "src": "/media/caps/Taupe cable-knit beanie with WINTEX label-3.png",
    "alt": "Taupe cable-knit beanie with WINTEX label reference",
    "category": "Knitted caps"
  }
];

export const scarfReferences = [
  {
    "src": "/media/scarves/Coiled blue-and-white scarf with tiny WINTEX label-2.png",
    "alt": "Coiled blue-and-white scarf with tiny WINTEX label reference",
    "category": "Scarves & mufflers"
  },
  {
    "src": "/media/scarves/folded-dark-grey-b2ba7c04c5.png",
    "alt": "Folded dark grey scarf with Wintex label reference",
    "category": "Scarves & mufflers"
  },
  {
    "src": "/media/scarves/Folded grey scarf with tiny WINTEX label-3.png",
    "alt": "Folded grey scarf with tiny WINTEX label reference",
    "category": "Scarves & mufflers"
  },
  {
    "src": "/media/scarves/Ivory Coiled Knit Scarf, WINTEX Label-4.png",
    "alt": "Ivory Coiled Knit Scarf, WINTEX Label reference",
    "category": "Scarves & mufflers"
  }
];

const groups = [sockReferences, gloveReferences, capReferences, scarfReferences];
export const accessoryReferences = Array.from({ length: Math.max(...groups.map(group => group.length)) }, (_, index) => groups.flatMap(group => group[index] ? [group[index]] : [])).flat();
