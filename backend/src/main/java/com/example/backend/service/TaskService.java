package com.example.backend.service;

import com.example.backend.model.TaskRequest;
import com.example.backend.model.entity.ProjectEntity;
import com.example.backend.model.entity.TaskEntity;
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
      allTasks.add(taskRepository.findAllByColumnId(i));
    }
    return allTasks;
  }

  public TaskEntity createTask(TaskRequest taskRequest) {
    TaskEntity taskEntity = new TaskEntity();
    modelMapper.map(taskRequest, taskEntity);
    taskEntity.setColumnId(0);
    ProjectEntity projectEntity =
        projectRepository.findById(taskRequest.getProjectId()).orElseThrow(RuntimeException::new);
    taskEntity.setProject(projectEntity);
    return taskRepository.save(taskEntity);
  }

  public TaskEntity moveTask(UUID taskId, int columnId) {
    TaskEntity taskEntity = taskRepository.findById(taskId).orElseThrow(RuntimeException::new);

    return taskRepository.save(taskEntity.withColumnId(columnId));
  }
}
