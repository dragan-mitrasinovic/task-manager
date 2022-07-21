package com.example.backend.repo;

import com.example.backend.model.entity.ProjectEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ProjectRepository extends JpaRepository<ProjectEntity, UUID> {
  List<ProjectEntity> findAllByOrderByCreatedOn();
}
