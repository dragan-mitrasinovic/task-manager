package com.example.backend.repo;

import com.example.backend.model.entity.TaskEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface TaskRepository extends JpaRepository<TaskEntity, UUID> {

  List<TaskEntity> findAllByColumnIdAndProjectIdOrderByCreatedOn(int columnId, UUID projectId);
}
