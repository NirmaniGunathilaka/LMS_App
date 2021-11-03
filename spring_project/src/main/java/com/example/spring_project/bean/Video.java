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
@Table(name = "video_details")
public class Video {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "video_id")
	private long video_id;
	

	@Column(name = "name")
	private String name;
	

	@Column(name = "url")
	private String url;
	

	@Column(name = "duration")
	private String duration;
	
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


	public long getVideo_id() {
		return video_id;
	}
	
	public Video() {
		// TODO Auto-generated constructor stub
	}

	public void setVideo_id(long video_id) {
		this.video_id = video_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	

	public Video(long video_id, String name, String url, String duration, Course course) {
		super();
		this.video_id = video_id;
		this.name = name;
		this.url = url;
		this.duration = duration;
		this.course = course;
	}

	@Override
	public String toString() {
		return "Video [video_id=" + video_id + ", name=" + name + ", url=" + url + ", duration=" + duration
				+ ", course=" + course + "]";
	}

	

}
