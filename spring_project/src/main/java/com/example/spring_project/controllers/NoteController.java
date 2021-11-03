package com.example.spring_project.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.spring_project.bean.Note;
import com.example.spring_project.service.NoteService;
//
@CrossOrigin
@RestController
@RequestMapping("/note")
public class NoteController {

	

	@Autowired	
	NoteService service;
	
	@PostMapping("/note_details")
	public String insertNote(@RequestBody Note note) {//request object received by client is emp
		service.insertNote(note);
		System.out.println(note.toString());
		return "Note inserted successfully!";
	}
	
	@GetMapping
	public List<Note> getAllNotes(){
		return service.getAllNotes();
		}
	
	
}
