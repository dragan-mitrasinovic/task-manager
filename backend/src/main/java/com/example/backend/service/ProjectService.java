package com.example.backend.service;

import com.example.backend.model.entity.ProjectEntity;
import com.example.backend.model.request.ProjectRequest;
import com.example.backend.model.response.ProjectContentResponse;
import com.example.backend.repo.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ProjectService {

  private final ProjectRepository projectRepository;
  private final TaskService taskService;
  private final ModelMapper modelMapper;

  public ProjectContentResponse getProjectContent(UUID projectId) {
    ProjectContentResponse projectContentResponse = new ProjectContentResponse();

    ProjectEntity projectEntity =
        projectRepository.findById(projectId).orElseThrow(RuntimeException::new);

    modelMapper.map(projectEntity, projectContentResponse);
    projectContentResponse.setTasks(taskService.getAllTasks(projectId));

    return projectContentResponse;
  }

  public void createProject(String projectName) {
    ProjectEntity projectEntity = new ProjectEntity();
    projectEntity.setName(projectName);
    projectRepository.save(projectEntity);
  }

  public List<ProjectEntity> getAllProjects() {
    return projectRepository.findAllByOrderByCreatedOn();
  }

  public void deleteProject(UUID projectId) {
    projectRepository.deleteById(projectId);
  }

  public void editProject(UUID projectId, ProjectRequest projectRequest) {
    ProjectEntity projectEntity =
        projectRepository.findById(projectId).orElseThrow(RuntimeException::new);
    modelMapper.map(projectRequest, projectEntity);
    projectRepository.save(projectEntity);
  }
}
