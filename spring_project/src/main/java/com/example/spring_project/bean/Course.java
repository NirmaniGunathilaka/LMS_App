package com.example.spring_project.bean;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "course_details")
public class Course {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "course_id")
	private long course_id;

	@Column(name = "name")
	private String name;

	@Column(name = "description")
	private String description;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "course", fetch = FetchType.LAZY)
	private List<Note> notes;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "course", fetch = FetchType.LAZY)
	private List<Video> videos;

	public Course() {
		// TODO Auto-generated constructor stub
	}

	public Course(long course_id, String name, String description) {
		this.course_id = course_id;
		this.name = name;
		this.description = description;
	}

	@JsonManagedReference
	public List<Note> getNotes() {
		return notes;
	}

	@JsonManagedReference
	public List<Video> getVideos() {
		return videos;
	}

	public void setVideos(List<Video> videos) {
		this.videos = videos;
	}

	public void setNotes(List<Note> notes) {
		this.notes = notes;
	}

	public Course(long course_id, String name, String description, List<Note> notes, List<Video> videos) {
		super();
		this.course_id = course_id;
		this.name = name;
		this.description = description;
		this.notes = notes;
		this.videos = videos;
	}


	public long getCourse_id() {
		return course_id;
	}

	public void setCourse_id(long course_id) {
		this.course_id = course_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	
	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "Course [course_id=" + course_id + ", name=" + name + ", description=" + description + "]";
	}

}
