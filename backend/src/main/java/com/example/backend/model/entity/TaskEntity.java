package com.example.backend.model.entity;

import lombok.*;

import javax.persistence.*;
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

  private String title;
  private String description;
  @With private int columnId;

  @ManyToOne
  @JoinColumn(name = "projectId")
  private ProjectEntity project;
}
