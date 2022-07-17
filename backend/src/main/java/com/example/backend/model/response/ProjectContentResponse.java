package com.example.backend.model.response;

import com.example.backend.model.entity.TaskEntity;
import lombok.Data;

import java.util.List;
import java.util.UUID;

@Data
public class ProjectContentResponse {

  private UUID id;

  private String name;

  private List<List<TaskEntity>> tasks;
}
