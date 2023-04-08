# Gradient Button Effect in CSS
<h3>About</h3>
A stylish button with a smooth gradient shadow hover effect. It was created using HTML and Pure CSS. When you click on the button, it will animate the background of the button with a multicolor gradient.
## Review result:

https://user-images.githubusercontent.com/70604119/230731776-f1804a52-7950-4529-9ca2-3c29fc348d72.mp4

Gradient Button Effect CSS Code:
~~~CSS
button{
    background:linear-gradient(
        to right,
        hsl(340deg,100%,50%),
        hsl(300deg,100%,50%)
    );
    color:white;
    transition: filter 800ms;
    width: 200px;
    padding: 15px;
    border:1px solid white;
    border-radius: 5px;
}

button:hover{
    filter:hue-rotate(-40deg);
    text-decoration: underline;
}
~~~
You can easily make such like buttons by using CSS in this way.
Hopefully,it will be useful to you guys.✌😁

