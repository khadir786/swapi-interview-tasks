package com.example.starter.controllers;

import com.example.starter.service.PeopleService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.web.bind.annotation.*;

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

    // search for a character -> show results (name only) in a table -> button next to each name -> add to table
    @GetMapping("/person")
    public String getPerson(@RequestParam String name) {
        return peopleService.getPerson(name);
    }

    @GetMapping("/person/id")
    public String getPerson(@RequestParam Integer id) {
        return peopleService.getPerson(id);
    }

    @GetMapping("/person/wookie/id")
    public String getPersonWookie(@RequestParam Integer id) {
        return peopleService.getPersonWookie(id);
    }

    @PostMapping("/people/add/{id}")
    public boolean addPerson(@PathVariable("id") Integer id) {
        return peopleService.addPerson(id);
    }

    @DeleteMapping("/person/delete/{id}")
    public boolean deletePerson(@PathVariable("id") Integer id) {return peopleService.deletePerson(id); }


}
