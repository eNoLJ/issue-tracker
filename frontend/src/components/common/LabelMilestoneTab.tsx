import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { labelMilestoneClickedState } from 'store/labelMilestoneTabStore';
import { getIssuesInfoState, IssuesInfoStateType } from 'store/issueInfoStore';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import MilestoneIcon from 'components/atom/MilestoneIcon';
import RenderError from 'page/errorPage/renderError';

interface Props {
  labelState?: boolean;
  milestoneState?: boolean;
}
function LabelMilestoneTab(): ReactElement {
  const labelMilestoneClick = useRecoilValue(labelMilestoneClickedState);
  const issuesInfoData = useRecoilValue(getIssuesInfoState);

  if (typeof issuesInfoData === 'number') RenderError(issuesInfoData);
  let countInfo = issuesInfoData as IssuesInfoStateType;
  let labelCount = countInfo.count.label;
  let milestoneCount = countInfo.count.milestone;
  return (
    <LabelMilestoneTabBlock>
      <Link to='/label'>
        <LabelBlock labelState={labelMilestoneClick.label}>
          <LoyaltyIcon fontSize='small' />
          &nbsp;레이블 ({labelCount})
        </LabelBlock>
      </Link>
      <Link to='/milestone'>
        <MilestoneBlock milestoneState={labelMilestoneClick.milestone}>
          <MilestoneIcon sizeType={14} />
          마일스톤 ({milestoneCount})
        </MilestoneBlock>
      </Link>
    </LabelMilestoneTabBlock>
  );
}

export default React.memo(LabelMilestoneTab);

const MilestoneBlock = styled.div<Props>`
  border-radius: 0 11px 11px 0;
  background-color: ${({ milestoneState, theme }) =>
    milestoneState ? theme.color.bgGrey : theme.color.white};
`;
const LabelBlock = styled.div<Props>`
  border-radius: 11px 0 0 11px;
  background-color: ${({ labelState, theme }) =>
    labelState ? theme.color.bgGrey : theme.color.white};
`;
const LabelMilestoneTabBlock = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.color.lineGrey};
  border-radius: 11px;
  a {
    color: ${({ theme }) => theme.color.fontGrey};
    text-decoration: none;
    div {
      width: 160px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      &:not(:last-child) {
        border-right: 1px solid ${({ theme }) => theme.color.lineGrey};
      }
    }
  }
`;
