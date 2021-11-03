package com.example.spring_project.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "note_details")
public class Note {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "note_id")
	private long note_id;

	@Column(name = "drive_link")
	private String drive_link;

	@ManyToOne
	@JoinColumn(name = "course_id")
	private Course course;

	@JsonBackReference
	public Course getCourse() {
		return course;
	}

	public void setCourse(Course course) {
		this.course = course;
	}

	public long getNote_id() {
		return note_id;
	}

	public void setNote_id(long note_id) {
		this.note_id = note_id;
	}



	public String getDrive_link() {
		return drive_link;
	}

	public void setDrive_link(String drive_link) {
		this.drive_link = drive_link;
	}

	@Override
	public String toString() {
		return "Note [note_id=" + note_id + ", drive_link=" + drive_link + ", course=" + course + "]";
	}

	public Note() {
		// TODO Auto-generated constructor stub
	}

	public Note(long note_id, String drive_link, Course course) {
		super();
		this.note_id = note_id;
		this.drive_link = drive_link;
		this.course = course;
	}

}
