SPA created with the API https://rawg.io/
<br>
Homepage:<br>
<img width="1412" alt="Screen Shot 2022-10-25 at 20 28 47" src="https://user-images.githubusercontent.com/100241036/197901903-56b927d4-133b-4c97-b42f-2341b80e49b9.png">


<br>
Detail of a card:<br>
<img width="1183" alt="Screen Shot 2022-10-25 at 20 30 04" src="https://user-images.githubusercontent.com/100241036/197901918-2ff6cd19-b7ee-41ff-bc9d-095b5add2b25.png">
Form for the creation of a new videogame with the state of genres and platforms ordered alphabetically for ease of use:

<img width="1118" alt="Screen Shot 2022-10-25 at 20 30 47" src="https://user-images.githubusercontent.com/100241036/197901930-a19e64fb-305e-4b57-9c09-8f3d037da8f2.png">
<img width="1121" alt="Screen Shot 2022-10-25 at 20 30 57" src="https://user-images.githubusercontent.com/100241036/197901937-5f53d591-f516-4d96-b729-b4f0fabf0e20.png">
<br>


If you´d like to run this project on your computer you´d need to create a DB with posgresSQl named videogames. You´d also need to download the zip of this repository and create an .env file inside the "api" folder with the following information:
<br>
<br>
DB_USER=[your postgres user name]
DB_PASSWORD=[your postgres password]
DB_HOST=localhost
<br>
<br>
Afterwards you´ll need to open a terminal inside the api folder and run npm install and npm start once the installation is completed. Repeat these two steps on the client folder aswell. If everything works properly, the API should load on your internet browser.
