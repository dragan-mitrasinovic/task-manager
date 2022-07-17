package com.example.backend.controller;

import com.example.backend.model.entity.ProjectEntity;
import com.example.backend.model.request.ProjectRequest;
import com.example.backend.model.response.ProjectContentResponse;
import com.example.backend.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/projects")
@RequiredArgsConstructor
@CrossOrigin
public class ProjectController {

  private final ProjectService projectService;

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public void createProject(@RequestBody ProjectRequest projectRequest) {
    projectService.createProject(projectRequest.getName());
  }

  @GetMapping("/{projectId}")
  public ProjectContentResponse getProjectContent(@PathVariable UUID projectId) {
    return projectService.getProjectContent(projectId);
  }

  @GetMapping
  public List<ProjectEntity> getAllProjects() {
    return projectService.getAllProjects();
  }

  @DeleteMapping("/{projectId}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  public void deleteProject(@PathVariable UUID projectId) {
    projectService.deleteProject(projectId);
  }

  @PutMapping("/{projectId}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  public void editProject(
      @RequestBody ProjectRequest projectRequest, @PathVariable UUID projectId) {
    projectService.editProject(projectId, projectRequest);
  }
}
