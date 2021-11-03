package com.example.spring_project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.spring_project.bean.Video;
import com.example.spring_project.repository.VideoRepository;

@Service
public class VideoService {
	@Autowired
	VideoRepository repo;

	public void insertVideo(Video video) {
		repo.save(video);
	}

	public List<Video> getAllVideos() {
		return repo.findAll();
	}
}
