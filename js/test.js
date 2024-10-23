function fitText(div) {
    const text = div.textContent;
    const fontSize = 16; // initial font size
    while (getComputedStyle(div).width < div.scrollWidth) {
      fontSize--;
      div.style.fontSize = fontSize + 'px';
    }
  }