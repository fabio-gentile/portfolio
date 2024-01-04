export const swiper = (elem, opts) => {
  let touchstartX = 0;
  let touchstartY = 0;
  let touchendX = 0;
  let touchendY = 0;

  const handleDirection = (delx, dely) => {
    if (Math.abs(delx) > Math.abs(dely)) {
      return delx > 0 ? "right" : "left";
    } else if (Math.abs(delx) < Math.abs(dely)) {
      return dely > 0 ? "down" : "up";
    } else {
      return "tap";
    }
  };

  const handleSwipe = (direction, event) => {
    if (opts[direction]) {
      opts[direction]();
      event.preventDefault();
      event.stopPropagation();
    }
  };

  elem.addEventListener(
    "touchstart",
    (event) => {
      touchstartX = event.changedTouches[0].screenX;
      touchstartY = event.changedTouches[0].screenY;
    },
    false
  );

  elem.addEventListener(
    "touchend",
    (event) => {
      touchendX = event.changedTouches[0].screenX;
      touchendY = event.changedTouches[0].screenY;

      const direction = handleDirection(touchendX - touchstartX, touchendY - touchstartY);
      handleSwipe(direction, event);
    },
    false
  );
};
