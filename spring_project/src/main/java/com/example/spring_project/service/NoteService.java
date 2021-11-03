package com.example.spring_project.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.spring_project.bean.Note;
import com.example.spring_project.repository.NoteRepository;


@Service
public class NoteService {
	@Autowired
	NoteRepository repo;

	public void insertNote(Note note) {
		repo.save(note);
	}

	public List<Note> getAllNotes() {
		return repo.findAll();
	}
}
