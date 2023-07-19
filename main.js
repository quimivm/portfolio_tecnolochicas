let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Pharmacovigilant, Web Developer, First responder, Full-time geek.')
  .pauseFor(500)
  .deleteChars(10)
  .start();
