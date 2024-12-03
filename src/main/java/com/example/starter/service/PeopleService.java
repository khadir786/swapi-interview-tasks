package com.example.starter.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.*;

// You need an annotation here to tell Spring that this is a service.
@Service
public class PeopleService {
    final String apiUrl = "https://swapi.dev/api/people/";
    private Map<String, Integer> peopleIDs = new HashMap<String, Integer>();

    // if you know the IDs for the person, they can be added here
    PeopleService() {
        peopleIDs.put("Luke Skywalker", 1);
        peopleIDs.put("C-3PO", 2);
        peopleIDs.put("R2-D2", 3);
        peopleIDs.put("Darth Vader", 4);
    }

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
    public String getPeople() throws JsonProcessingException {
        RestTemplate restTemplate = new RestTemplate();
        List<Map<String, Object>> combinedResponse = new ArrayList<>();

        // iterate over each character and fetch their data
        for (Map.Entry<String, Integer> entry : peopleIDs.entrySet()) {
            String characterName = entry.getKey();
            int characterId = entry.getValue();

            try {
                // fetch data for each character and put into a map... map -> json object (each map is its own json object)
                ResponseEntity<Map> response = restTemplate.getForEntity(apiUrl + characterId, Map.class);
                combinedResponse.add(response.getBody());
            } catch (Exception e) {
                System.err.println("Failed to fetch data for " + characterName + ": " + e.getMessage());
            }
        }

        // convert the combined response to a json string
        return new ObjectMapper().writeValueAsString(combinedResponse);
    }

    public String getPerson(String name) {
        String endpoint = apiUrl + "?search=" + name;
        try {
            RestTemplate restTemplate = new RestTemplate();
            ResponseEntity<String> response = restTemplate.getForEntity(endpoint, String.class);
            return response.getBody();
        } catch (Exception e) {
            System.err.println("Failed to fetch data for " + name + ": " + e.getMessage());
            return "";
        }
    }
}
// could just make it into an actual json object to return... would have to change too many things