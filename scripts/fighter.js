let state = {
  kick0: false,
  kick1: false,
  kick2: false,
  kick3: false,
  kick4: false,
  kick5: false,
  kick6: false,
  defense1: false,
  defense2: false,
  defense3: false,
  defense4: false,
  defense5: false,
  acrobatics1: false,
  acrobatics2: false,
  acrobatics3: false
};

document.addEventListener('keyup', evt => {
  Object.keys(state).forEach(v => (state[v] = false));
  switch (evt.code) {
    case 'KeyA':
      state.kick1 = !state.kick1;
      break;
    case 'KeyS':
      state.kick2 = !state.kick2;
      break;
    case 'KeyD':
      state.kick3 = !state.kick3;
      break;
    case 'KeyF':
      state.kick4 = !state.kick4;
      break;
    case 'KeyG':
      state.kick5 = !state.kick5;
      break;
    case 'KeyH':
      state.kick6 = !state.kick6;
      break;
    case 'KeyQ':
      state.defense1 = !state.defense1;
      break;
    case 'KeyW':
      state.defense2 = !state.defense2;
      break;
    case 'KeyE':
      state.defense3 = !state.defense3;
      break;
    case 'KeyR':
      state.defense4 = !state.defense4;
      break;
    case 'KeyT':
      state.defense5 = !state.defense5;
      break;
    case 'KeyX':
      state.acrobatics1 = !state.acrobatics1;
      break;
    case 'KeyC':
      state.acrobatics2 = !state.acrobatics2;
      break;
    case 'KeyV':
      state.acrobatics3 = !state.acrobatics3;
      break;
  }

  renderKick();
  score();
});

const fighter = document.querySelector('.fighter');

function renderKick() {
  if (state.kick0 === true) {
    fighter.style.backgroundImage =
      "url('https://raw.githubusercontent.com/ThePF/capoeiraGame/master/picsMovements/gingaf.png')";
    fighter.style.width = '300px';
    fighter.style.marginRight = '-70px';
    fighter.style.backgroundPosition = 'bottom';
  } else if (state.kick1 === true) {
    fighter.style.backgroundImage =
      "url('https://raw.githubusercontent.com/ThePF/capoeiraGame/master/picsMovements/Kicks/kfighter/meialuadefrentef.png')";
    fighter.style.width = '300px';
    fighter.style.marginRight = '-70px';
    fighter.style.backgroundPosition = 'bottom';
  } else if (state.kick2 === true) {
    fighter.style.backgroundImage =
      "url('https://raw.githubusercontent.com/ThePF/capoeiraGame/master/picsMovements/Kicks/kfighter/meialuadecompassof.png')";
    fighter.style.width = '430px';
    fighter.style.marginRight = '-100px';
    fighter.style.backgroundPosition = 'bottom';
  } else if (state.kick3 === true) {
    fighter.style.backgroundImage =
      "url('https://raw.githubusercontent.com/ThePF/capoeiraGame/master/picsMovements/Kicks/kfighter/martelof.png')";
    fighter.style.width = '350px';
    fighter.style.marginRight = '-100px';
    fighter.style.backgroundPosition = 'bottom';
  } else if (state.kick4 === true) {
    fighter.style.backgroundImage =
      "url('https://raw.githubusercontent.com/ThePF/capoeiraGame/master/picsMovements/Kicks/kfighter/macacof.png')";
    fighter.style.width = '500px';
    fighter.style.marginRight = '-170px';
    fighter.style.backgroundPosition = 'bottom';
  } else if (state.kick5 === true) {
    fighter.style.backgroundImage =
      "url('https://raw.githubusercontent.com/ThePF/capoeiraGame/master/picsMovements/Kicks/kfighter/jumpkickf.png')";
    fighter.style.width = '320px';
    fighter.style.marginRight = '-130px';
    fighter.style.backgroundPosition = 'top';
  } else if (state.kick6 === true) {
    fighter.style.backgroundImage =
      "url('https://raw.githubusercontent.com/ThePF/capoeiraGame/master/picsMovements/Kicks/kfighter/cartwheelkickf.png')";
    fighter.style.width = '450px';
    fighter.style.marginRight = '-140px';
    fighter.style.backgroundPosition = 'bottom';
  } else if (state.defense1 === true) {
    fighter.style.backgroundImage =
      "url('https://raw.githubusercontent.com/ThePF/capoeiraGame/master/picsMovements/Defense/dfighter/negativaf.png')";
    fighter.style.width = '380px';
    fighter.style.marginRight = '-70px';
    fighter.style.backgroundPosition = 'bottom';
  } else if (state.defense2 === true) {
    fighter.style.backgroundImage =
      "url('https://raw.githubusercontent.com/ThePF/capoeiraGame/master/picsMovements/Defense/dfighter/quedadequatrof.png')";
    fighter.style.width = '320px';
    fighter.style.marginRight = '-70px';
    fighter.style.backgroundPosition = 'bottom';
  } else if (state.defense3 === true) {
    fighter.style.backgroundImage =
      "url('https://raw.githubusercontent.com/ThePF/capoeiraGame/master/picsMovements/Defense/dfighter/cocorinhaf.png')";
    fighter.style.width = '220px';
    fighter.style.marginRight = '-40px';
    fighter.style.backgroundPosition = 'bottom';
  } else if (state.defense4 === true) {
    fighter.style.backgroundImage =
      "url('https://raw.githubusercontent.com/ThePF/capoeiraGame/master/picsMovements/Defense/dfighter/esquivadeladof.png')";

    fighter.style.width = '480px';
    fighter.style.marginRight = '-80px';
    fighter.style.backgroundPosition = 'bottom';
  } else if (state.defense5 === true) {
    fighter.style.backgroundImage =
      "url('https://raw.githubusercontent.com/ThePF/capoeiraGame/master/picsMovements/Defense/dfighter/rasteraf.png')";
    fighter.style.width = '480px';
    fighter.style.marginRight = '-120px';
    fighter.style.backgroundPosition = 'bottom';
  } else if (state.acrobatics1 === true) {
    fighter.style.backgroundImage =
      "url('https://raw.githubusercontent.com/ThePF/capoeiraGame/master/picsMovements/Acrobatics/afighter/cartwheelstraightf.png')";
    fighter.style.width = '580px';
    fighter.style.marginRight = '-120px';
    fighter.style.backgroundPosition = 'bottom';
  } else if (state.acrobatics2 === true) {
    fighter.style.backgroundImage =
      "url('https://raw.githubusercontent.com/ThePF/capoeiraGame/master/picsMovements/Acrobatics/afighter/macacosidef.png')";
    fighter.style.width = '290px';
    fighter.style.marginRight = '-120px';
    fighter.style.backgroundPosition = 'bottom';
  } else if (state.acrobatics3 === true) {
    fighter.style.backgroundImage =
      "url('https://raw.githubusercontent.com/ThePF/capoeiraGame/master/picsMovements/Acrobatics/afighter/cartwheelf.png')";

    fighter.style.width = '450px';
    fighter.style.marginRight = '-100px';
    fighter.style.backgroundPosition = 'bottom';
  } else {
    fighter.style.backgroundImage =
      "url('https://raw.githubusercontent.com/ThePF/capoeiraGame/master/picsMovements/gingaf.png')";
    fighter.style.width = '350px';
    fighter.style.backgroundPosition = 'bottom';
    fighter.style.marginRight = '0px';
  }
}