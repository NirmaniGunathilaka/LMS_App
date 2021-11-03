package com.example.spring_project.service;

import com.example.spring_project.bean.Course;
import com.example.spring_project.bean.Note;
import com.example.spring_project.repository.NoteRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class NoteServiceTest {
    @Mock
    private NoteRepository noteRepository;

    private NoteService noteService;
    Course course=new Course(19,"Html","sadaa");
    Note note=new Note(7,"assaaaa",course);


    @Test
    void insertNote() {
        noteService.insertNote(note);
        verify(noteRepository).save(note);
    }
    @BeforeEach
    void setUp() {
        this.noteService = new NoteService(this.noteRepository);
    }

    @Test
    void getAllNotes() {
        noteService.getAllNotes();
        verify(noteRepository).findAll();
    }
}