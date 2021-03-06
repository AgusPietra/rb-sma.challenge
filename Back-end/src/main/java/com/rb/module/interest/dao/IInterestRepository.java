package com.rb.module.interest.dao;

import java.util.List;

import com.rb.module.interest.entity.Interest;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface IInterestRepository extends MongoRepository<Interest, String> {

    Interest findByInterestName(String interestName);
    List<Interest> findAll();
}
