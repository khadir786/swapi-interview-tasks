package com.example.starter.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
    // you can ignore this for the most part, refer to the PeopleController
    // Do not make changes here
    @RequestMapping(value = "/")
    public String index() {
        return "index";
    }
}
