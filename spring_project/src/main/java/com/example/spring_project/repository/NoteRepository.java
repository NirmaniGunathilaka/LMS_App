package com.example.spring_project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.spring_project.bean.Note;

public interface NoteRepository extends JpaRepository<Note, Long> {

}
