package com.example.spring_project.service;

import com.example.spring_project.bean.Note;
import com.example.spring_project.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class NoteService {
	@Autowired
	NoteRepository repo;

	public void insertNote(Note note) {
		repo.save(note);
	}
	public NoteService(NoteRepository repo) {
		this.repo = repo;
	}

	public List<Note> getAllNotes() {
		return repo.findAll();
	}
}
