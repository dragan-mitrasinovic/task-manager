package com.example.backend.model;

import lombok.Data;

import java.util.UUID;

@Data
public class TaskRequest {

  private String title;
  private String description;
  private UUID projectId;
}
