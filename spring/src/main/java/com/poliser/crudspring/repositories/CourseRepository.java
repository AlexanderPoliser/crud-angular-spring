package com.poliser.crudspring.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.poliser.crudspring.models.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {

}
