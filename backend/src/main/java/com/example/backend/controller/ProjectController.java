package com.example.backend.controller;

import com.example.backend.model.entity.ProjectEntity;
import com.example.backend.model.response.ProjectContentResponse;
import com.example.backend.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/projects")
@RequiredArgsConstructor
@CrossOrigin
public class ProjectController {

  private final ProjectService projectService;

  @PostMapping("/{projectName}")
  public ProjectEntity createProject(@PathVariable String projectName) {
    return projectService.createProject(projectName);
  }

  @GetMapping("/{projectId}")
  public ProjectContentResponse getProjectContent(@PathVariable UUID projectId) {
    return projectService.getProjectContent(projectId);
  }

  @GetMapping
  public List<ProjectEntity> getAllProjects() {
    return projectService.getAllProjects();
  }
}
