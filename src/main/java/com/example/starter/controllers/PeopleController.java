package com.example.starter.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController // This annotation tells Spring that this is a controller.
public class PeopleController {

    @GetMapping("/people") // This annotation tells Spring that this method should be called when a GET request is made to "/people".
    public String getPeople() {
        // This will need to connect to the People service.
        throw new UnsupportedOperationException("Not yet implemented");
    }
}
