package com.example.spring_project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.spring_project.bean.Video;

public interface VideoRepository extends JpaRepository<Video, Long>{

}
