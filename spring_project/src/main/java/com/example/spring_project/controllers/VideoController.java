package com.example.spring_project.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.spring_project.bean.Video;
import com.example.spring_project.service.VideoService;

@CrossOrigin
@RestController
@RequestMapping("/video")
public class VideoController {
	@Autowired
	VideoService service;

	@PostMapping("/video_details")
	public String insertVideo(@RequestBody Video video) {
		service.insertVideo(video);
		System.out.println(video.toString());
		return "Video inserted successfully!";
	}

	@GetMapping
	public List<Video> getAllVideos() {
		return service.getAllVideos();
	}

}
