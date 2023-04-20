## About 
A CSS hover effect takes place when a user hovers over an element, and the element responds with transition effects. It is used to mark the key items on the web page and it’s an effective way to enhance the user experience.

<h3>Review:

https://user-images.githubusercontent.com/70604119/230955707-091cea3e-d5ae-4ae7-b751-308d92af9a74.mp4

<h3>Here's Text Hover Effect code which was I used this small exaple:<br/>

~~~css
  
   h1{
    line-height: 1.2em;
    color:#0000;
    text-shadow: 0 0 #000, 0 1.2em #1095c1;
    overflow: hidden;
    transition: 0.3s;
    font-size: 1em;
    margin: 10px;
    font-family: 'geomanist-regular-webfont';
}
h1:hover{
    text-shadow: 0 -1.2em #000, 0 0 #1095c1;
}
~~~
