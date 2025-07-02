//lorems

window.onload = function() {
  let abtButton = document.querySelector(".abtButton");
  let popup1 = document.querySelector(".popup1");
  let prjButton = document.querySelector(".prjButton");
  let contactButton = document.querySelector(".contactButton")
  let exitButton = document.querySelector(".exitB")
  let expButton = document.querySelector(".expButton")
  let submit = document.querySelector(".submit")
  let snow = true;
  let toggle = document.querySelector(".toggle");
  let snowAnimationId = null;
  console.log("script.js is running!");
  const tl = gsap.timeline({defaults: {duration: .75, ease: "power1.out"}})

  const canvas = document.getElementById('snow-canvas');
if(canvas){const ctx = canvas.getContext('2d');
 
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let snowflakes = [];

  function createSnowflakes() {
    for (let i = 0; i < 100; i++) {
      snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 4 + 1,
        speed: Math.random() * 1 + 0.5,
        drift: Math.random() * 1 - 0.5
      });
    }
  }

  function drawSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.beginPath();
    for (let flake of snowflakes) {
      ctx.moveTo(flake.x, flake.y);
      ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
    }
    ctx.fill();
    moveSnowflakes();
  }

  function moveSnowflakes() {
    for (let flake of snowflakes) {
      flake.y += flake.speed;
      flake.x += flake.drift;

      if (flake.y > canvas.height) {
        flake.y = -flake.radius;
        flake.x = Math.random() * canvas.width;
      }
    }
  }

  function update() {
    if (snow) {
      drawSnowflakes();
      snowAnimationId = requestAnimationFrame(update);
    }
  }

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  createSnowflakes();
  update();

  if (toggle) {
    toggle.addEventListener('click', function() {
      if (snow) {
        toggle.style.backgroundImage = "url('assets/noSnow.png')";
        snow = false;
        cancelAnimationFrame(snowAnimationId);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      } else {
        toggle.style.backgroundImage = "url('assets/Snow.png')";
        snow = true;
        update();
      }
    });
  }
}
if(abtButton){
    abtButton.addEventListener('click',function(){
  window.location.href = 'aboutMe.html';
  })
  abtButton.addEventListener('mouseenter', function() {
    gsap.to(abtButton, { scale: 1.1, duration: 0.2, ease: "power1.out" });
    tl.fromTo('.popup1', {opacity:0}, {opacity:1})
  });
  abtButton.addEventListener('mouseleave', function() {
     gsap.to(abtButton, { scale: 1, duration: 0.2, ease: "power1.out" });
    tl.fromTo('.popup1', {opacity:1}, {opacity:0})
  });
}
if(contactButton){
    contactButton.addEventListener('mouseenter', function() {
      gsap.to(contactButton, { scale: 1.1, duration: 0.2, ease: "power1.out" });
      tl.fromTo('.popup3', {opacity:0}, {opacity:1})
    });
    contactButton.addEventListener('mouseleave', function() {
       gsap.to(contactButton, { scale: 1, duration: 0.2, ease: "power1.out" });
      tl.fromTo('.popup3', {opacity:1}, {opacity:0})
    });
    contactButton.addEventListener('click', function(){
    window.location.href = 'contacts.html';
})
}
if(exitButton){
    exitButton.addEventListener('mouseenter', function(){
      gsap.to(exitButton, { scale: 1.2, duration: 0.2, ease: "power1.out" });
    })
    exitButton.addEventListener('mouseleave', function(){
      gsap.to(exitButton, { scale: 1, duration: 0.2, ease: "power1.out" });
    })
}
if(expButton){
    expButton.addEventListener('mouseenter', function() {
      gsap.to(expButton, { scale: 1.1, duration: 0.2, ease: "power1.out" });
      tl.fromTo('.popup2', {opacity:0}, {opacity:1})
    });
    expButton.addEventListener('mouseleave', function() {
       gsap.to(expButton, { scale: 1, duration: 0.2, ease: "power1.out" });
      tl.fromTo('.popup2', {opacity:1}, {opacity:0})
    });
    expButton.addEventListener('click', function(){
    window.location.href = 'exp.html';
})
}
if(submit){
  submit.addEventListener('mouseenter', function() {
    gsap.to(submit, { scale: 1.1, duration: 0.2, ease: "power1.out" });
  });
  submit.addEventListener('mouseleave', function() {
    gsap.to(submit, { scale: 1, duration: 0.2, ease: "power1.out" });
  });
}
 
}



