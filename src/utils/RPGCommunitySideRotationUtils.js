const RPGCommunitySideRotationUtils = {
      coordinatesToSide: function (dX, dY) {
            var result = "";

            if (dY < 0) result += "up";
            if (dX > 0) result += "right";
            if (dY > 0) result += "down";
            if (dX < 0) result += "left";

            return result;
      },

      sideToRotation: function (side) {
            switch (side) {
                  case "up":
                        return "0deg";
                  case "upright":
                        return "45deg";
                  case "right":
                        return "90deg";
                  case "rightdown":
                        return "135deg";
                  case "down":
                        return "180deg";
                  case "downleft":
                        return "225deg";
                  case "left":
                        return "270deg";
                  case "leftup":
                        return "315deg";
                  default:
                        return "0deg";
            }
      }
}
export default RPGCommunitySideRotationUtils;