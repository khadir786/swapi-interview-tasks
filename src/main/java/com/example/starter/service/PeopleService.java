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
    private List<Integer> peopleIds = new ArrayList<>(Arrays.asList(1, 2, 3, 4));

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
     *
     * @return A list of people from the Star Wars API.
     */

    // gets both the standard and wookie response from the api for each character and collates them into a map
    public String getPeople() throws JsonProcessingException {
        RestTemplate restTemplate = new RestTemplate();
        List<Map<String, Object>> combinedResponse = new ArrayList<>();
        List<Map<String, Object>> combinedWookieResponse = new ArrayList<>();
        Object[] responses = new Object[2];

        // iterate over each character and fetch their data
        for (Integer id : peopleIds) {
            try {
                // fetch data for each character and put into a map... map -> json object (each map is its own json object)
                ResponseEntity<Map> response = restTemplate.getForEntity(apiUrl + id, Map.class);
                ResponseEntity<Map> wookieResponse = restTemplate.getForEntity(apiUrl + id + "?format=wookiee", Map.class);
                combinedResponse.add(response.getBody());
                combinedWookieResponse.add(wookieResponse.getBody());
            } catch (Exception e) {
                System.err.println("Failed to fetch data for the character with the ID:" + id + ": " + e.getMessage());
            }
        }
        responses[0] = combinedResponse;
        responses[1] = combinedWookieResponse;
        // convert the combined response to a json string
        return new ObjectMapper().writeValueAsString(responses);
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

    public String getPerson(Integer id) {
        String endpoint = apiUrl + id;
        try {
            RestTemplate restTemplate = new RestTemplate();
            ResponseEntity<String> response = restTemplate.getForEntity(endpoint, String.class);
            return response.getBody();
        } catch (Exception e) {
            System.err.println("Failed to fetch data for the character with the ID: " + id + ": " + e.getMessage());
            return "";
        }
    }

    public String getPersonWookie(Integer id) {
        String endpoint = apiUrl + id + "?format=wookiee";
        try {
            RestTemplate restTemplate = new RestTemplate();
            ResponseEntity<String> response = restTemplate.getForEntity(endpoint, String.class);
            return response.getBody();
        } catch (Exception e) {
            System.err.println("Failed to fetch data for the character with the ID: " + id + ": " + e.getMessage());
            return "";
        }
    }

    public boolean addPerson(Integer id) {
        try {
            // validate the person exists by fetching their data
            String personData = getPerson(id);
            if (personData == null || personData.isEmpty()) {
                System.err.println("Character with ID " + id + " does not exist.");
                return false;
            }
            // add the ID to the list if not already present
            if (!peopleIds.contains(id)) {
                peopleIds.add(id);
                System.out.println("Added character with ID " + id);
                return true;
            } else {
                System.out.println("Character with ID " + id + " is already in the list.");
                return false;
            }
        } catch (Exception e) {
            System.err.println("Error while adding character with ID " + id + ": " + e.getMessage());
            return false;
        }
    }

    public boolean deletePerson(Integer id) {
        if (peopleIds.contains(id)) {
            peopleIds.remove(id);
            System.out.println("Removed character with ID " + id);
            return true;
        }
        System.out.println("Character with ID " + id + " does not exist.");
        return false;
    }


}
// could just make it into an actual json object to return... would have to change too many things