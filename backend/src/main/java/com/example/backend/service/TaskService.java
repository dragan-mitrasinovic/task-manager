package com.example.backend.service;

import com.example.backend.model.entity.ProjectEntity;
import com.example.backend.model.entity.TaskEntity;
import com.example.backend.model.request.TaskRequest;
import com.example.backend.repo.ProjectRepository;
import com.example.backend.repo.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class TaskService {

  private final TaskRepository taskRepository;
  private final ProjectRepository projectRepository;
  private final ModelMapper modelMapper;

  public List<List<TaskEntity>> getAllTasks(UUID projectId) {
    List<List<TaskEntity>> allTasks = new ArrayList<>();
    for (int i = 0; i < 5; i++) {
      allTasks.add(taskRepository.findAllByColumnIdAndProjectId(i, projectId));
    }
    return allTasks;
  }

  public void createTask(TaskRequest taskRequest) {
    TaskEntity taskEntity = new TaskEntity();
    modelMapper.map(taskRequest, taskEntity);
    taskEntity.setColumnId(0);
    ProjectEntity projectEntity =
        projectRepository.findById(taskRequest.getProjectId()).orElseThrow(RuntimeException::new);
    taskEntity.setProject(projectEntity);
    taskRepository.save(taskEntity);
  }

  public void moveTask(UUID taskId, int columnId) {
    TaskEntity taskEntity = taskRepository.findById(taskId).orElseThrow(RuntimeException::new);
    taskRepository.save(taskEntity.withColumnId(columnId));
  }

  public void editTask(UUID taskId, TaskRequest taskRequest) {
    TaskEntity taskEntity = taskRepository.findById(taskId).orElseThrow(RuntimeException::new);
    taskRepository.save(
        taskEntity.withDescription(taskRequest.getDescription()).withTitle(taskRequest.getTitle()));
  }

  public void deleteTask(UUID taskId) {
    taskRepository.deleteById(taskId);
  }

  public TaskEntity getTask(UUID taskId) {
    return taskRepository.findById(taskId).orElseThrow(RuntimeException::new);
  }
}
