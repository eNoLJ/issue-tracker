package com.jane_eno.issue_tracker.web.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;
import com.jane_eno.issue_tracker.domain.milestone.Milestone;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Builder
@ToString
@AllArgsConstructor
public class MilestoneDTO {

    private final Long id;
    private final String title;
    private final String description;
    private final LocalDateTime createdDateTime;
    private final LocalDate dueDate;
    private final Long openedIssues;
    private final Long closedIssues;

    public static MilestoneDTO of(Milestone milestone) {
        return MilestoneDTO.builder()
                .id(milestone.getId())
                .title(milestone.getTitle())
                .description(milestone.getDescription())
                .createdDateTime(milestone.getCreatedDateTime())
                .dueDate(milestone.getDueDate())
                .openedIssues(milestone.countOpenedIssues())
                .closedIssues(milestone.countClosedIssues())
                .build();
    }
}
