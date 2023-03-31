## This is a small example to demonstrate how you can add a shake animation effect to buttons on hovering. 
https://user-images.githubusercontent.com/70604119/229085385-bff23b15-25d4-4884-b5c0-4582342092fa.mp4
CSS code
~~~CSS
button:disabled:hover{
  animation:shake 200ms 2;
}
@keyframes shake{
  0%,100% {translate:0;}
  25% {translate:0.125rem;}
  75% {translate: -0.125rem;}
}
~~~
Hope you found this demo helpful ✌️
