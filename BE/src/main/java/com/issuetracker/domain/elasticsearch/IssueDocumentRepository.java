package com.issuetracker.domain.elasticsearch;

import org.springframework.data.domain.Pageable;
import org.springframework.data.elasticsearch.annotations.CountQuery;
import org.springframework.data.elasticsearch.annotations.Query;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

import java.util.List;

public interface IssueDocumentRepository extends ElasticsearchRepository<IssueDocument, Long> {

    @CountQuery("{\"bool\": {\"must\": [{\"match\": {\"title\": \"?0\"}},{\"match\": {\"isOpen\": \"?1\"}}]}}")
    long countIssueDocumentByTitleAndIsOpen(String title, boolean isOpen);

    @Query("{\"bool\": {\"must\": [{\"match\": {\"title\": \"?0\"}},{\"match\": {\"isOpen\": \"?1\"}}]}}")
    List<IssueDocument> findAllByTitleAndIsOpen(String title, boolean isOpen, Pageable pageable);
}
