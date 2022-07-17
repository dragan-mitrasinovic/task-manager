package com.example.backend.controller;

import com.example.backend.model.request.TaskRequest;
import com.example.backend.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/tasks")
@RequiredArgsConstructor
@CrossOrigin
public class TaskController {

  private final TaskService taskService;

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public void createTask(@RequestBody TaskRequest taskRequest) {
    taskService.createTask(taskRequest);
  }

  @PutMapping("/{taskId}/{columnId}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  public void moveTask(@PathVariable UUID taskId, @PathVariable int columnId) {
    taskService.moveTask(taskId, columnId);
  }

  @PutMapping("/{taskId}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  public void editTask(@PathVariable UUID taskId, @RequestBody TaskRequest taskRequest) {
    taskService.editTask(taskId, taskRequest);
  }

  @DeleteMapping("/{taskId}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  public void deleteTask(@PathVariable UUID taskId) {
    taskService.deleteTask(taskId);
  }
}
