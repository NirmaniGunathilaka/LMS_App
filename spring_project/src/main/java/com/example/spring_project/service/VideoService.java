package com.example.spring_project.service;

import com.example.spring_project.bean.Video;
import com.example.spring_project.repository.VideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VideoService {
	@Autowired
	VideoRepository repo;

	public void insertVideo(Video video) {
		repo.save(video);
	}
	public VideoService(VideoRepository repo) {
		this.repo = repo;
	}

	public List<Video> getAllVideos() {
		return repo.findAll();
	}
}
