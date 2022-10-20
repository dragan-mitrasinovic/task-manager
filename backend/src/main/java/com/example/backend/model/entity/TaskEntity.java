package com.example.backend.model.entity;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity(name = "task")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TaskEntity {

  @Id
  @GeneratedValue
  @Column(length = 16)
  private UUID id;

  @With private String title;
  @With private String description;
  @With private int columnId;
  @CreatedDate private LocalDateTime createdOn;

  @ManyToOne
  @JoinColumn(name = "projectId")
  private ProjectEntity project;
}
