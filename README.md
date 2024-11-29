# Swapi Interview Task

Using data from SWAPI - The Star Wars API (https://swapi.dev/), create a Spring Boot application with a React frontend that displays the following characters in a table:

- Luke Skywalker
- C-3PO
- R2-D2
- Darth Vader

A basic table exists but is incomplete. You will need to fetch the data from the API store it appropriately, and then return that to the frontend. You will also need to modify the table to display the following information:

- Name
- Height
- Mass
- Hair Colour
- Birth Year

`Please note, that you are welcome to create any additional classes or methods that you feel are necessary to complete the task.`
`You can also change any existing code as you see fit. Unless stated otherwise`

## Further Tasks

If you have time, please attempt one of the following:

- Add an input field that allows the insertion of a character to the table. The user should be able to input the name of a character and click a button to add them to the table.
- Add a functioning delete button to each row in the table. When clicked, the row should be removed from the table.
- Add a checkbox which allows the switching between wookiee translations and standard English. The data should be displayed in the selected language.



## Running

Run the following command to start the application:
```sh
./mvnw install spring-boot:run
```

Basic hot reload is enabled, so you can make changes to the code and the server will restart automatically.

You may want hot-reloading on the front-end too:
```shell
npm start
```
Access the dev server on localhost:9000

# Requirements
- Java 17
