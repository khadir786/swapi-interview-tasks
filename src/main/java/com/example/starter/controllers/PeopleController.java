package com.example.starter.controllers;

import com.example.starter.service.PeopleService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController // This annotation tells Spring that this is a controller.
public class PeopleController {
    private final PeopleService peopleService;

    public PeopleController(PeopleService userService) {
        this.peopleService = userService;
    }

    @GetMapping("/people") // This annotation tells Spring that this method should be called when a GET request is made to "/people".
    public String getPeople() {
        try {
            return peopleService.getPeople();
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
        // This will need to connect to the People service.
    }
}
