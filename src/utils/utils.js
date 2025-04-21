export function mostrarIconeRole(role) {
    switch (role) {
      case "tank":
        return "https://images.blz-contentstack.com/v3/assets/blt9c12f249ac15c7ec/bltcb94e9203be4088a/dark_circle_tank.svg";
      case "damage":
        return "https://images.blz-contentstack.com/v3/assets/blt9c12f249ac15c7ec/blt052e8b02aef879b0/dark_circle_damage.svg";
      case "support":
        return "https://images.blz-contentstack.com/v3/assets/blt9c12f249ac15c7ec/blt8cf279e9b3126ef8/dark_circle_support.svg";
      default:
        return role;
    }
  }

export function traduzirRole(role) {
    switch (role) {
      case "tank":
        return "Tanque";
      case "damage":
        return "Dano";
      case "support":
        return "Suporte";
      default:
        return role;
    }
  }

export const heroImageSizes = {
    ana: "-mt-12 md:-ml-10 w-[200px] md:w-[240px] lg:w-[320px]",
    ashe: "-mt-12 md:-ml-25 w-[200px] md:w-[240px] lg:w-[460px]",
    baptiste: "-mt-12 md:-ml-30 w-[290px] md:w-[240px] lg:w-[570px]",
    bastion: "-mt-12 md:-ml-7 lg:-ml-10 w-[200px] md:w-[290px] lg:w-[470px]",
    brigitte: "-mt-12 md:-ml-20 lg:-ml-20 w-[290px] md:w-[360px] lg:w-[380px]",
    cassidy: "-mt-12 md:-ml-15 lg:-ml-25 w-[200px] md:w-[280px] lg:w-[400px]",
    doomfist: "-mt-12 md:-ml-15 lg:-ml-20 w-[290px] md:w-[380px] lg:w-[470px]",
    dva: "-mt-12 md:-ml-10 lg:-ml-20 w-[300px] md:w-[380px] lg:w-[720px]",
    echo: "-mt-12 md:-ml-10 lg:-ml-12 w-[290px] md:w-[350px] lg:w-[350px]",
    genji: "-mt-12 md:-ml-5 lg:-ml-5 w-[290px] md:w-[350px] lg:w-[320px]",
    hanzo: "-mt-12 md:-ml-5 lg:-ml-5 w-[150px] md:w-[160px] lg:w-[260px]",
    hazard: "-mt-12 md:-ml-10 lg:-ml-10 w-[290px] md:w-[350px] lg:w-[500px]",
    illari: "-mt-12 md:-ml-10 lg:-ml-10 w-[290px] md:w-[350px] lg:w-[680px]",
    'junker-queen': "-mt-12 md:-ml-10 lg:-ml-10 w-[220px] md:w-[350px] lg:w-[300px]",
    junkrat: "-mt-12 md:-ml-40 lg:-ml-60 w-[380px] md:w-[520px] lg:w-[730px]",
    juno: "-mt-12 md:-ml-10 lg:-ml-20 w-[290px] md:w-[350px] lg:w-[430px]",
    kiriko: "-mt-12 md:-ml-10 lg:-ml-10 w-[200px] md:w-[350px] lg:w-[260px]",
    lifeweaver: "-mt-12 md:-ml-10 lg:-ml-15 w-[290px] md:w-[350px] lg:w-[445px]",
    lucio: "-mt-12 md:-ml-10 lg:-ml-15 w-[290px] md:w-[350px] lg:w-[300px]",
    mauga: "-mt-12 md:-ml-5 lg:-ml-10 w-[390px] md:w-[480px] lg:w-[1230px]",
    mei: "-mt-12 md:-ml-10 lg:-ml-15 w-[250px] md:w-[350px] lg:w-[380px]",
    mercy: "-mt-12 md:-ml-5 lg:-ml-5 w-[250px] md:w-[350px] lg:w-[310px]",
    moira: "-mt-12 md:-ml-20 lg:-ml-35 w-[290px] md:w-[350px] lg:w-[500px]",
    orisa: "-mt-12 md:-ml-10 lg:-ml-12 w-[290px] md:w-[280px] lg:w-[585px]",
    pharah: "-mt-12 md:-ml-10 lg:-ml-20 w-[200px] md:w-[280px] lg:w-[370px]",
    ramattra: "-mt-12 md:-ml-10 lg:-ml-12 w-[200px] md:w-[280px] lg:w-[380px]",
    reaper: "-mt-12 md:-ml-10 lg:-ml-15 w-[200px] md:w-[280px] lg:w-[420px]",
    reinhardt: "-mt-12 md:-ml-5 lg:-ml-5 w-[200px] md:w-[280px] lg:w-[570px]",
    roadhog: "-mt-12 md:-ml-10 lg:-ml-12 w-[360px] md:w-[480px] lg:w-[730px]",
    sigma: "-mt-12 md:-ml-15 lg:-ml-40 w-[290px] md:w-[370px] lg:w-[730px]",
    sojourn: "-mt-12 md:-ml-5 lg:-ml-5 w-[200px] md:w-[280px] lg:w-[310px]",
    'soldier-76': "-mt-12 md:-ml-40 lg:-ml-60 w-[360px] md:w-[480px] lg:w-[730px]",
    sombra: "-mt-12 md:-ml-12 lg:-ml-15 w-[150px] md:w-[180px] lg:w-[250px]",
    symmetra: "-mt-12 md:-ml-10 lg:-ml-12 w-[200px] md:w-[280px] lg:w-[300px]",
    torbjorn: "-mt-12 md:-ml-10 lg:-ml-12 w-[230px] md:w-[280px] lg:w-[550px]",
    tracer: "-mt-12 md:-ml-5 lg:-ml-12 w-[150px] md:w-[150px] lg:w-[260px]",
    venture: "-mt-12 md:-ml-10 lg:-ml-10 w-[150px] md:w-[200px] lg:w-[370px]",
    widowmaker: "-mt-12 md:-ml-5 lg:-ml-20 w-[150px] md:w-[200px] lg:w-[310px]",
    winston: "-mt-12 md:-ml-10 lg:-ml-10 w-[250px] md:w-[250px] lg:w-[480px]",
    'wrecking-ball': "-mt-12 md:-ml-10 lg:-ml-15 w-[300px] md:w-[360px] lg:w-[860px]",
    zarya: "-mt-12 md:-ml-7 lg:-ml-10 w-[180px] md:w-[250px] lg:w-[380px]",
    zenyatta: "-mt-12 md:-ml-32 lg:-ml-40 w-[320px] md:w-[550px] lg:w-[730px]",
  };
