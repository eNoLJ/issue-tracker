package com.issuetracker.domain.issue;

import com.issuetracker.web.dto.reqeust.FilterRequestDTO;
import com.querydsl.core.QueryResults;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface CustomizedIssueRepository {

    QueryResults<Issue> findAllIssuesFilteredBySearchRequest(FilterRequestDTO searchRequest, Pageable pageable);

    long countIssueFilteredByStatusAndSearchRequest(String status, FilterRequestDTO searchRequest, Pageable pageable);
}
