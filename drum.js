JavaScript:  const bank1 = {
    Q: { name: "Heater 1", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
    W: { name: "Heater 2", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },
    E: { name: "Heater 3", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },
    A: { name: "Heater 4", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },
    S: { name: "Clap", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },
    D: { name: "Open HH", url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_oh.mp3" },
    Z: { name: "Kick n Hat", url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },
    X: { name: "Kick", url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_Kick_1.mp3" },
    C: { name: "Closed HH", url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" },
  };
  
  const bank2 = {
    Q: { name: "Chord 1", url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" },
    W: { name: "Chord 2", url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" },
    E: { name: "Chord 3", url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" },
    A: { name: "Shaker", url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3" },
    S: { name: "Dry Ohh", url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3" },
    D: { name: "Bld H1", url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3" },
    Z: { name: "Punchy Kick", url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" },
    X: { name: "Side Stick", url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" },
    C: { name: "Snare", url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" },
  };
  
  let currentBank = bank1;
  let powerOn = true;
  
  const display = document.getElementById("display");
  const pads = document.querySelectorAll(".drum-pad");
  const volumeSlider = document.querySelector(".volume-slider input");
  
  
  pads.forEach(pad => {
    pad.addEventListener("click", () => playSound(pad.innerText));
  });
  
  
  document.addEventListener("keydown", (e) => {
    const key = e.key.toUpperCase();
    if (currentBank[key]) playSound(key);
  });
  
  
  function playSound(key) {
    if (!powerOn) return;
    const audio = document.getElementById(key);
    const sound = currentBank[key];
    audio.src = sound.url;
    audio.volume = volumeSlider.value;
    audio.currentTime = 0;
    audio.play();
    display.innerText = sound.name;
  }
  
  const bankToggle = document.querySelectorAll(".control")[1].querySelector(".select");
  bankToggle.addEventListener("click", () => {
    if (!powerOn) return;
    bankToggle.classList.toggle("active");
    currentBank = bankToggle.classList.contains("active") ? bank2 : bank1;
    display.innerText = bankToggle.classList.contains("active") ? "Bank 2" : "Bank 1";
  });
  
  const powerToggle = document.querySelectorAll(".control")[0].querySelector(".select");
  powerToggle.addEventListener("click", () => {
    powerToggle.classList.toggle("active");
    powerOn = powerToggle.classList.contains("active");
    display.innerText = powerOn ? "Power On" : "Power Off";
  });
  
  volumeSlider.addEventListener("input", () => {
    const audios = document.querySelectorAll(".clip");
    audios.forEach(audio => {
      audio.volume = volumeSlider.value;
    });
  });