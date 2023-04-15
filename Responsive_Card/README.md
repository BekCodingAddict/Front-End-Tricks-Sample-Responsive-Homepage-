# Responsive Card

<p>A responsive card in web design refers to a user interface (UI) element that is designed to adapt and display well across different screen sizes and devices, such as desktop computers, tablets, and mobile phones. It typically consists of a container that holds content, such as text, images, and buttons, and is designed to be visually appealing and easy to interact with on various devices.

The key aspect of a responsive card is its ability to resize and rearrange its content dynamically based on the available screen space. This ensures that the card looks visually appealing and remains usable regardless of the screen size or orientation of the device being used to view the website or web application.

Responsive cards are commonly used in web design for displaying various types of content, such as product listings, blog posts, news articles, social media posts, and more. They often include features such as hover effects, clickable elements, and responsive images to enhance the user experience and make the card visually engaging.

Overall, responsive cards are an important design element in creating modern, mobile-friendly websites and web applications that provide a consistent and optimal user experience across different devices and screen sizes.</p>

### Review:

https://user-images.githubusercontent.com/70604119/232231927-0def7d2e-5039-45ea-bb44-efd20d436a23.mp4

### HTML Code Like that:
~~~HTML
<div class="card">
   <img src="img path">
   <div>
      <h2>Full-Stack Software Engineer</h2>
      <h3>About</h3>
      <p>A full stack engineer...</p>
      <button>Show me</button>
   </div>
</div>
~~~
Here I will show the responsive card the main css codes:
~~~css
    * {
        box-sizing: border-box;
      }

     .card{
        display: flex;
        align-items: center;
        width: 75vw;
        max-width: 650px;
        padding: 50px 30px 50px 20px;
        background: #ffffff;
        border-radius: 24px;
        box-shadow: 2px 2px 2px 2px gray;
      }
      /* card Image */
      .card img{
        max-width: 280px;
        width: 38vw;
        height: 200px;
        object-fit: cover;
        margin-left: -60px;
        margin-right: 30px;
        border-radius: inherit;
        box-shadow: 2px 60px 40px rgb(0 0 0 / 8%);
      }

     .card h3{
        color:rgb(0,0,0 / 8%);
      }
      .card p{
        color:rgb(0 0 0 / 70%);
      }
     /* button */
      .card button{
        border:0;
        background:#5448de;
        color:#f8f8f8;
        font-family: inherit;
        padding: 10px;
        border-radius: 40px;
        width: 200px;
      }
     /*responsive design*/
      @media (width<=740px){
        .card{
            flex-direction: column;
            text-align: center;
            margin:0px;
            padding-left: 50px;
            padding-right: 50px;
            width: 100%;
        }

        .card img{
            margin:-100px 0 30px 0;
            width: 100%;
            max-width: 1000px;
        }
~~~
