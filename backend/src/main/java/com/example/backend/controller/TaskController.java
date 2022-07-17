package com.example.backend.controller;

import com.example.backend.model.TaskRequest;
import com.example.backend.model.entity.TaskEntity;
import com.example.backend.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/tasks")
@RequiredArgsConstructor
public class TaskController {

  private final TaskService taskService;

  @PostMapping
  public TaskEntity createTask(@RequestBody TaskRequest taskRequest) {
    return taskService.createTask(taskRequest);
  }

  @PutMapping("/{taskId}/{columnId}")
  public TaskEntity moveTask(@PathVariable UUID taskId, @PathVariable int columnId) {
    return taskService.moveTask(taskId, columnId);
  }
}
