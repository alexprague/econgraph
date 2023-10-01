import { useEffect, useRef } from "react";

function useDragger(centerID, id1, id2, env) {
  const isClicked1 = useRef(false);
  const isClicked2 = useRef(false);

  const coords1 = useRef({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  });
  const coords2 = useRef({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  });
  const coords = useRef({
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
  });

  useEffect(() => {
    //gets targets
    const target1 = document.getElementById(id1);
    const target2 = document.getElementById(id2);
    const center = document.getElementById(centerID);
    const container = target1.parentElement;

    //other items
    const follower = document.getElementById("center2");
    const price = document.getElementById("price");
    const quantity = document.getElementById("quantity");
    const side = document.getElementById("side");
    const up = document.getElementById("up");

    coords.x1 = target1.offsetLeft;
    coords.y1 = target1.offsetTop;
    coords.x2 = target2.offsetLeft;
    coords.y2 = target2.offsetTop;

    //func to do math to find center
    const moveIntersect = () => {

      const centers = getCenter(coords, env);
      const centerX = centers[0];
      const centerY = centers[1];

      center.style.top = `${centerY - 10}px`;
      center.style.left = `${centerX - 10}px`;
      //10 is width of ball/2

      price.innerHTML = ((env.height - centerY) / env.scaleY).toFixed(2);
      quantity.innerHTML = (centerX / env.scaleX).toFixed(2);

      side.style.width = `${centerX}px`;
      side.style.top = `${centerY - 1}px`;
      up.style.left = `${centerX - 1}px`;
      up.style.top = `${centerY}px`;
      up.style.height = `${env.height - centerY}px`;

      follower.style.top = `${centerY}px`;
      follower.style.left = `${centerX}px`;
      if (centerX < 0.75 * env.width) follower.style.marginLeft = '40px';
      else follower.style.marginLeft = '-165px';

    };
    //initialize center



    moveIntersect();

    //saves initial positions
    coords1.current.lastX = target1.offsetLeft;
    coords1.current.lastY = target1.offsetTop;
    coords2.current.lastX = target2.offsetLeft;
    coords2.current.lastY = target2.offsetTop;

    //when clicked save pos of click
    const onMouseDown1 = (e) => {
      isClicked1.current = true;
      coords1.current.startX = e.clientX;
      coords1.current.startY = e.clientY;
      container.addEventListener("mouseleave", onMouseUp1);
    };
    //when let go save pos
    const onMouseUp1 = (e) => {

      isClicked1.current = false;

      const nextY = target1.offsetTop;
      const nextX = target1.offsetLeft;

      target1.style.top = `${nextY}px`;
      target1.style.left = `${nextX}px`;
      coords.x1 = nextX;
      coords.y1 = nextY;
      coords1.current.lastX = target1.offsetLeft;
      coords1.current.lastY = target1.offsetTop;

      moveIntersect()
      container.removeEventListener("mouseleave", onMouseUp1);
    };
    //when moved, set pos to last pos plus change in mouse from start
    const onMouseMove1 = (e) => {
      if (!isClicked1.current) return;

      let nextX = e.clientX - coords1.current.startX + coords1.current.lastX;
      let nextY = e.clientY - coords1.current.startY + coords1.current.lastY;

      target1.style.top = `${nextY}px`;
      target1.style.left = `${nextX}px`;
      coords.x1 = nextX;
      coords.y1 = nextY;
      moveIntersect();
    };
    //same as above. I tried for about an hour ro combine these but could not
    const onMouseDown2 = (e) => {
      isClicked2.current = true;
      coords2.current.startX = e.clientX;
      coords2.current.startY = e.clientY;
      container.addEventListener("mouseleave", onMouseUp2);
    };
    const onMouseUp2 = (e) => {
      isClicked2.current = false;

      const nextY = target2.offsetTop;
      const nextX = target2.offsetLeft;

      target2.style.top = `${nextY}px`;
      target2.style.left = `${nextX}px`;
      coords.x2 = nextX;
      coords.y2 = nextY;
      coords2.current.lastX = target2.offsetLeft;
      coords2.current.lastY = target2.offsetTop;

      moveIntersect()
      container.removeEventListener("mouseleave", onMouseUp2);
    };
    const onMouseMove2 = (e) => {
      if (!isClicked2.current) return;

      let nextX = e.clientX - coords2.current.startX + coords2.current.lastX;
      let nextY = e.clientY - coords2.current.startY + coords2.current.lastY;

      target2.style.top = `${nextY}px`;
      target2.style.left = `${nextX}px`;
      coords.x2 = nextX;
      coords.y2 = nextY;
      moveIntersect();
    };

    //event listeners for 1
    target1.addEventListener("mousedown", onMouseDown1);
    target1.addEventListener("mouseup", onMouseUp1);
    container.addEventListener("mousemove", onMouseMove1);
    //event listeners for 2
    target2.addEventListener("mousedown", onMouseDown2);
    target2.addEventListener("mouseup", onMouseUp2);
    container.addEventListener("mousemove", onMouseMove2);


    const reset = () => {
      isClicked1.current = false;
      isClicked2.current = false;
    };
    container.addEventListener("mouseup", reset);

    //removes event listeners
    const cleanup = () => {
      container.removeEventListener("mouseup", reset);

      target1.removeEventListener("mousedown", onMouseDown1);
      target1.removeEventListener("mouseup", onMouseUp1);
      container.removeEventListener("mousemove", onMouseMove1);

      target2.removeEventListener("mousedown", onMouseDown2);
      target2.removeEventListener("mouseup", onMouseUp2);
      container.removeEventListener("mousemove", onMouseMove2);

    };

    return cleanup;
  }, [centerID, id1, id2, env]);
}


function getCenter(coords, env) {
  const r = 500 - 5;
  const r2 = r ** 2

  //from center
  const x1 = coords.x1;
  const y1 = coords.y1;
  const x2 = coords.x2 + r;
  const y2 = coords.y2;

  //document.getElementById('C1').style.top = `${y1 - r}px`;
  //document.getElementById('C1').style.left = `${x1 - r}px`;
  //document.getElementById('C2').style.top = `${y2 - r}px`;
  //document.getElementById('C2').style.left = `${x2 - r}px`;


  const c1 = (x) => -1 * Math.sqrt(r2 - (x - x1) ** 2) - y1;
  const c2 = (x) => -1 * Math.sqrt(r2 - (x - x2) ** 2) - y2;

  const dx = x2 - x1;
  const dy = y1 - y2;

  const sqrt = Math.sqrt(-1 * dx ** 4 * dy ** 2 - 2 * dx ** 2 * dy ** 4 + r2 * 4 * dx ** 2 * dy ** 2 - dy ** 6 + r2 * 4 * dy ** 4)

  const s1 = (dx ** 3 + sqrt + dx * dy ** 2) / (2 * (dx ** 2 + dy ** 2)) + x1
  const s2 = (dx ** 3 - sqrt + dx * dy ** 2) / (2 * (dx ** 2 + dy ** 2)) + x1


  let centerX;
  let centerY;

  if (Math.abs(c1(s1) - c2(s1)) < Math.abs(c1(s2) - c2(s2))) {
    centerX = s1;
  }
  else {
    centerX = s2;
  }

  centerY = -1 * c1(centerX)

  return [centerX, centerY];
}



export default useDragger;
