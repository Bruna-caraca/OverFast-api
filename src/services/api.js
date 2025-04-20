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
