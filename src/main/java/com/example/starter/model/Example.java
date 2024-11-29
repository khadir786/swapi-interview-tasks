package com.example.starter.model;

import lombok.*;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Getter // This will generate the getters for all fields.
@Setter // This will generate the setters for all fields.
@NoArgsConstructor // This will generate a default constructor.

// Use this as reference only. Do not make changes here.
public class Example {
    private @Id @GeneratedValue Long id;
    private String name;
    private String description;
}
