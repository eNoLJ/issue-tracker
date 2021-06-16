import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom'
import styled from 'styled-components';
import Title from 'components/atom/Title';
import ProfileImg from 'components/atom/ProfileImg';
import IssueInput from 'page/createIssuePage/issueInput/IssueInput';
import IssueDetailOption from 'page/createIssuePage/issueDetailOption/IssueDetailOption';
import PrimaryButton from 'components/atom/PrimaryButton';
import fetchData from 'util/api/createIssue'
export default function CreateIssuePage(): ReactElement {
  const history = useHistory()
  const sample = {
    title: "새애애애로운이슈",
    comment: "이슈 내용 뉴_뉴",
    assignees: [1],
    labels: [1, 2, 3],
    milestone: 2
  }
  

  const handleClick = async (btnType: string) =>{
   console.log(btnType)
    if (btnType==='cancle'){
      history.push('/main')
    }
    else{ 
      const isSuccess = await fetchData(sample)
      if(isSuccess===200) history.push('/main')
    }
  }
  
  return (
    <CreateIssuePageBlock>
      <div className='create__section__header'>
        <Title className='create__title'>새로운 이슈 작성</Title>
      </div>
      <div className='create__section__body'>
        <ProfileImg />
        <IssueInput />
        <IssueDetailOption />
      </div>
      <div className='create__section__footer'>
         {/* //?onClick사용하기 위해 styled로 변경, 상위에서 한번만 내리고 싶음 => spanButton styled도 지우고*/}
        <SpanButton  onClick={()=>handleClick('cancel')}>⨯ 작성 취소</SpanButton>
        <PrimaryButton value='완료' className='create__submit-btn' onClick={()=>handleClick('create')}/>
      </div>
    </CreateIssuePageBlock>
  );
}
const SpanButton =styled.div`
cursor:pointer;`
const CreateIssuePageBlock = styled.div`
  padding: 50px 80px;
  .create__title {
    padding-bottom: 2rem;
    border-bottom: ${({ theme }) => `1px solid ${theme.color.lineGrey}`};
  }
  .create__section__body {
    display: grid;
    padding-bottom: 2rem;
    border-bottom: ${({ theme }) => `1px solid ${theme.color.lineGrey}`};
    grid-template-columns: 5% 75% 20%;
    grid-gap: 10px;
    padding-top: 33px;
    position: relative;
  }
  .create__section__footer {
    display: flex;
    margin-top: 2rem;
    justify-content: flex-end;
    align-items: center;
    .create__submit-btn {
      cursor:pointer;
      margin-left: 2rem;
      width: 240px;
      height: 56px;
    }
  }
`;
