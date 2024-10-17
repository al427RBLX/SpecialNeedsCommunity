function disableClick() {
    document.onclick = function(event) {
      if (event.button == 2) {
        alert('Right Click Message');
        return false;
      }
    }
  }