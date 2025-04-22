const BASE_URL = 'https://overfast-api.tekrop.fr';

export async function fetchHeroes(role = 'all') {
    let url = `${BASE_URL}/heroes?locale=pt-br`;
    if (role !== 'all') {
      url += `&role=${role}`;
    }
    const res = await fetch(url);
    return res.json();
  }

export async function fetchHeroDetails(heroKey) {
  const res = await fetch(`${BASE_URL}/heroes/${heroKey}?locale=pt-br`);
  return res.json();
}

export async function fetchGamemodes() {
  const res = await fetch(`${BASE_URL}/gamemodes`);
  return res.json();
}

export async function fetchMaps(gamemode = null) {
  let url = `${BASE_URL}/maps`;
  if (gamemode !== null) {
    url += `?gamemode=${gamemode}`;
  }
  const res = await fetch(url);
  return res.json();
}