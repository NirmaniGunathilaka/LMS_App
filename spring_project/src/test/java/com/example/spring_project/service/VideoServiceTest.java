package com.example.spring_project.service;

import com.example.spring_project.bean.Course;
import com.example.spring_project.bean.Video;
import com.example.spring_project.repository.VideoRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class VideoServiceTest {
    @Mock
    private VideoRepository videoRepository;

    private VideoService videoService;
    Course course=new Course(19,"Html","sadaa");
    Video video=new Video(3,
            "java video",
            "https://www.youtube.com/watch?v=eIrMbAQSU34",
            "20", course);


    @Test
    void insertVideo() {
        videoService.insertVideo(video);
        verify(videoRepository).save(video);
    }
    @BeforeEach
    void setUp() {
        this.videoService = new VideoService(this.videoRepository);
    }

    @Test
    void getAllVideos() {
        videoService.getAllVideos();
        verify(videoRepository).findAll();
    }
}