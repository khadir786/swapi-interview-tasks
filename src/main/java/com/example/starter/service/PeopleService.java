package com.example.starter.service;

// You need an annotation here to tell Spring that this is a service.

public class PeopleService {
    final String apiUrl = "https://swapi.dev/api/people/";

    /**
     * This method should return a list of people from the Star Wars API.
     * <br/>
     * General process:
     * <ol>
     *   <li>Make a GET request to the apiUrl.</li>
     *   <li>Parse the JSON response.</li>
     *   <li>Map the JSON response to a list of people.</li>
     *   <li>Return the list of people.</li>
     * </ol>
     * @return A list of people from the Star Wars API.
     */
    public String getPeople() {
        throw new UnsupportedOperationException("Not yet implemented");
    }
}
